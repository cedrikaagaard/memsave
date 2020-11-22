echo $DEPLOY_KEY | base64 -d > deploy_key
sudo chmod 600 deploy_key
scp -oStrictHostKeyChecking=no -i deploy_key docker-compose.yml root@188.227.86.84:/etc/docker-compose.yml/
ssh -oStrictHostKeyChecking=no -i deploy_key root@188.227.86.84 'reboot'
rm deploy_key