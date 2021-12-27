
echo "README_1=Auto generated file" >  ".env"
echo "README_2=Prefix variables with 'VITE_' to make them accessible to Sveltekit" >> ".env"
echo "" >> ".env"

BUILD_DATE=`date +"%Y-%m-%d %T"`
echo "VITE_BUILD_DATE=$BUILD_DATE" >> ".env"
