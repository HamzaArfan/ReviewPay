# React application Deploy to EC2 Machine
cd /home/ubuntu/ReviewPay_Web

git push

npm run build

cd /var/www/vhosts/frontend/

sudo rm -r build

cd -

sudo cp -R build/ /var/www/vhosts/frontend/

sudo systemctl restart nginx

sudo systemctl restart gunicorn