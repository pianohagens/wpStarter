var service_id = 'my_mandrill';
var template_id = 'feedback';
var template_params = {
name: 'Piano',
reply_email: 'pianoh09@gmail.com',
message: 'This is awesome!'
};

emailjs.send(service_id,template_id,template_params);