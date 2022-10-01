# Database

## Creating and seeding tables
0. Create `secrets.sh` file (The password can be found in railway):
    ```sh
    #!/bin/bash
    export PGPASSWORD=<insert-db-password-here>
    ```

1. Be in this `db` directory

2. Drop and Create the tables:
    ```sh
    bash ./setup_db.sh
    ```

3. Seed the tables with data:
    ```sh
    bash ./seed_db.sh
    ```