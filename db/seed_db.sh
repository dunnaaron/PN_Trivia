#!/bin/bash

source $(dirname $0)/"secrets.sh"
psql -h containers-us-west-36.railway.app -U postgres -p 6942 -d railway -f ./db/seed_db.sql