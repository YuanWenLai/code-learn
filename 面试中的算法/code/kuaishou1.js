export default (ip) => {
  let ipv4 = /^((2([0-4]\d|5[0-5])|1\d\d|[1-9]\d|[0-9])\.){3}(2([0-4]\d|5[0-5])|1\d\d|[1-9]\d|[0-9])$/
  let ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
  return ipv4.test(ip) ? "IPV4" :ipv6.test(ip) ? 'IPV6' : 'Neither'
}