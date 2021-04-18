#!/bin/bash

rm -rf docs

cp -r public/models         dist/
cp public/Trevor_Smith.pdf  dist/
cp public/profile.jpg       dist/

mv dist docs