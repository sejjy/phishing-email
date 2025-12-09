// https://www.emailjs.com

emailjs.init({
	publicKey: "PUBLIC_KEY",
});

document
	.getElementById("verification-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", this).then(
			() => {
				console.log("SUCCESS!");
				alert("Verification link sent! Please check your email.");
			},
			(error) => {
				console.log("FAILED...", error);
				alert("Error sending email. Please try again later.");
			},
		);
	});
