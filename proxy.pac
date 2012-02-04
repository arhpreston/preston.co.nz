function FindProxyForURL(url, host) {
    //return "PROXY localhost:8080";
    if ((dnsDomainIs(host, ".netflix.com") ||
	 dnsDomainIs(host, ".mog.com") || dnsDomainIs(host, ".musicnet.com")
	 )) {
	return "SOCKS localhost:8080";
    } else {
	return "DIRECT";
    }
}