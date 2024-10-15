import React from 'react';

function Form({ pdfUrl, brochureName }) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Downloading...");

    const formData = new FormData(event.target);

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Add Web3forms access key and the brochure identifier
    formData.append("access_key", "05091ded-e625-4901-bcd2-cc8fe65c4711");
    formData.append("brochure_name", brochureName);  // Add the brochure name or ID

    // Construct subject and body
    const subject = "Brochure Download Data";
    const body =
      "Name: " + name +
      "<br>Email: " + email +
      "<br>Phone no: " + phone +
      "<br>Message: " + message +
      "<br>Brochure: " + brochureName;  // Include the brochure in the message

    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          <div className="text-orange font-bold text-lg text-center pt-2">
              Thank You! 😁
          </div>
        );
        
        // Trigger download after form submission
        const link = document.createElement('a');
        link.href = pdfUrl;  // URL of the brochure file
        link.setAttribute('download', 'Brochure.pdf');  // Optional: rename the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("There was an error submitting the form");
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="relative lg:w-1/2">
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="text-sm">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm">Your Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              required
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
            ></textarea>
          </div>
          <input
            type="hidden"
            id="brochure_name"
            name="brochure_name"
            value={brochureName}  // Hidden field with the brochure name
          />
          <button type="submit" className="bg-orange text-white py-2 rounded-md">
            Download
          </button>
        </form>
        {result}
      </div>
    </div>
  );
}

export default Form;
