#!/bin/bash
# size displayed in bytes
curl -s "$1" | wc -c
