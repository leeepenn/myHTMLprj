
from http.server import HTTPServer, CGIHTTPRequestHandler

port = 8080

httpd = HTTPServer(('', port), CGIHTTPRequestHandler)
print("Starting simple_httpd on port: " +
      str(httpd.server_port)+str(httpd.server_address))
httpd.serve_forever()
