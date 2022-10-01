#!/bin/bash

PGPASSWORD=j5hIkvA6SJKbuANtOkvK psql -h containers-us-west-36.railway.app -U postgres -p 6942 -d railway -f ./db/setup_db.sql