#!/bin/bash

rm -rf docs

cp CNAME                    dist/
cp -r public/models         dist/
cp public/Trevor_Smith.pdf  dist/

mv dist docs