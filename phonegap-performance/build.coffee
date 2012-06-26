#!/usr/bin/env coffee
fs      = require 'fs'
ghm     = require("ghm")
final   = ''
outline = fs.readdirSync "#{ __dirname }/outline"
top     = fs.readFileSync "#{ __dirname }/top.html"
bottom  = fs.readFileSync "#{ __dirname }/bottom.html"

# concat
outline.forEach (section) -> final += fs.readFileSync "#{ __dirname }/outline/#{ section }"

# convert
html = ghm.parse final

# split up into sections
slides = html.split('<hr />').map((slide) -> "<section>#{ slide }</section>").join('')

# add front to back matter; reuse html var
html = "#{ top }#{ slides }#{ bottom }"

# clobber
fs.writeFileSync "#{ __dirname }/index.html", html

