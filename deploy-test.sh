echo $DEPLOY_KEY > deploy_key
sudo chmod 600 deploy_key
ssh -i deploy_key root@188.227.86.84 'reboot'
rm deploy_key