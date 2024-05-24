<!-- reference -->

https://github.com/stripe/stripe-cli/tree/v1.19.5

<!-- run stripe cli with docker -->

docker run --rm -it -v stripe-config://root/.config/stripe/ -v stripe-gpg://root/.gnupg/ -v stripe-pass://root/.password-store/ stripe-cli $stripe listen --forward-to http://host.docker.internal:3000/api/webhook
