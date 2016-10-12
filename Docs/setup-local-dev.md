# Setup Local Deployment for Development

This explains the steps to stand up a local multi-tenant instance of this OrchardCMS site for development. Primarily this is for updating themes and adding new modules.

Only the following assumptions of the local dev environment are made:
- Windows 8.1 / Windows 10 with
- SQL Server 2016 installed
- WebMatrix installed

First, clone this repository into a new folder into the dev environment.

## Configure SQL Server

- Ensure SQL Server is configured for mix authentication (Windows Authentication & SQL Authentication)
- Create a new user
  - Uncheck settings for password policy enforcement & password change requirement 
  - *the name `userorchardcmsdev` & `Password1!` is assumed to be the name & password of the user in the remainder of the steps in this doc*

## Backup and Restore Production Database Locally

- Backup / export the Azure SQL Server database as a `*.bacpac` file.
- Create a new database using the **Import Data-tier Application..** and use the `*.bacpac` from Azure
  - *the name `db-orchardcms-dev` is assumed to be the name of the database in the remainder of the steps in this doc*
- Grant the user `user-orchardcms-dev` the roles `db_datareader` & `db_datawriter`

## Download & Configure Tenant Settings

- Download the tenant settings folders from Azure storage
  - Copy the entire `Sites` folder from production to this repo's `App_Data` folder
    - Delete all the contents of these files except for the `Settings.txt` file
    - *you should now have `\App_Data\Sites\[tenant-id]` for each tenant*
- Update all tenant's `Settings.txt` files
  - For all, update the `DatabaseConnectionString` to point to the locally restored database. For example:

    ```
    DataConnectionString: Server=localhost;Database=db-orchardcms-dev;User ID=userorchardcmsdev;Password=Password1!;TrustServerCertificate=False;Connection Timeout=60;
    ```
  
  - For each non-default tenant, update the `RequestUrlHost` property to a local URL. For instance:
    - kerrb
      - `RequestUrlHost: *.kerrb.loc`
    - mscloudshow
      - `RequestUrlHost: *.mscloudshow.loc`

## Update Orchard Local vs. Azure Configuration

OrchardCms can be configured to save files in the local website disk storage or in Azure blob storage. The production instance of this deployment uses Azure Storage Blobs. This needs to be changed for local development (*IOW, undo what the doc [Config: Settings.txt in Azure Blob](config-settings-in-azure-blob.md) instructs*). All of this is controlled within the file `\Config\Host.config`.

- Remove file system and Azure blob providers:
  - Remove the following two `<component>` profiders for Azure:

    ```xml
    <!-- Configure Orchard to store shell settings in Windows Azure Blob Storage. -->
    <component instance-scope="single-instance"
              type="Orchard.FileSystems.Media.ConfigurationMimeTypeProvider, Orchard.Framework"   
              service="Orchard.FileSystems.Media.IMimeTypeProvider">
    </component>
    <component instance-scope="single-instance" 
              type="Orchard.Azure.Services.Environment.Configuration.AzureBlobShellSettingsManager, Orchard.Azure" 
              service="Orchard.Environment.Configuration.IShellSettingsManager">
    </component>
    ```
- Replace the following machine name provider for Azure...

    ```xml
    <!-- Configure Orchard to use role instance ID instead of Windows machine name for task lease records. -->
    <component instance-scope="single-instance" 
               type="Orchard.Azure.Services.TaskLease.AzureMachineNameProvider, Orchard.Azure" 
               service="Orchard.Environment.IMachineNameProvider, Orchard.Framework">
    </component>
    ```

  With this one:

    ```xml
    <component instance-scope="single-instance" 
               type="Orchard.Environment.MachineNameProvider, Orchard.Framework" 
               service="Orchard.Environment.IMachineNameProvider, Orchard.Framework">
    </component>
    ```

> **NOTE** DO NOT commit the changes in the modified `host.config` file to the repo... this will break the production deployment in Azure.

## Setup DNS Bypass

- Open `c:\windows\system32\drivers\etc\hosts` in a text editor as an administrator
- Add the following entries:

  ```
  127.0.0.1    accom.loc
  127.0.0.1    mscloudshow.loc
  127.0.0.1    kerrb.loc
  ```

## Update IISExpress Configuration for Multitenant Sites

If not already, open the site in WebMatrix... this triggers a new site entry to be created in IISExpress' configuration.

- Open `<MyDocuments>\IISExpress\config\applicationhost.config`
- Locate the section `<sites><site name="aci-orchardcms" id="####">...</sites>`
  - Do not alter any existing bindings
  - Copy the binding that's there (port may differ)...

    ```xml
    <binding protocol="http" bindingInformation="*:14473:localhost" />
    ```
  
  - ... and make # copies of it... one for each tenant

    ```xml
    <binding protocol="http" bindingInformation="*:14473:accom.loc" />
    <binding protocol="http" bindingInformation="*:14473:mscloudshow.loc" />
    <binding protocol="http" bindingInformation="*:14473:kerrb.loc" />
    ```

## Test

Everything should be configured correctly now. Within WebMatrix, restart the site and try navigating to the following tenants:

- http://accom.loc:14473
- http://mscloudshow.loc:14473
- http://kerrb.loc:14473

If there are errors, including 404's, check the logs in the repo's `/App_Data/Logs` folder. Usually it is a database connection issue.