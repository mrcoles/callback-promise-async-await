#!/usr/bin/env bash

# runs each sample - just to make sure they're not broken...

set -e

for f in 0*.js; do
    echo "> node $f"
    node "$f"
    echo ""
done
