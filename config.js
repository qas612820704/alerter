export const AUTH0_CONFIG = {
  domain: 'lego.auth0.com',
  clientId: 'Eg0j35srDHwcJoC2jrVfb4n1xzKhRdMJ',
  redirectUri: process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/callback'
    : `https://alerter.lego-is.me/callback`,
  audience: 'https://alerter.lego-is.me',
};

export const WEBTASK = {
  uri: 'https://wt-1951fb5147811432447ab6e0f150d690-0.sandbox.auth0-extend.com/alerter'
}
