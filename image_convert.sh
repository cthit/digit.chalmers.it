#!/bin/bash
# Converts all pictures in /static into 100px wide avif and webp pictures
# requires imagemagik

png_suffix=".png"
avif_suffix=".avif"
webp_suffix=".webp"

cd static

for year in "./digIT"*
do
    cd "$year"
    for img in *".png"
    do
        avif_file="${img%$png_suffix}$avif_suffix"
        webp_file="${img%$png_suffix}$webp_suffix"

        convert $img -resize 95 -quality 60% $avif_file
        convert $img -resize 95 -quality 60% $webp_file

    done
    cd ..
done