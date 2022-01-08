let email = document.getElementById("email-address");
let emailButton = document.getElementById("email-logo");

emailButton.addEventListener("click", () => {
  email.setAttribute("value", "iamyujioshiro@gmail.com");
  email.setAttribute("type", "text");
  copyEmailToClipboard();
  email.setAttribute("value", "");
  email.setAttribute("type", "hidden");
})

copyEmailToClipboard = () => {
  if (confirm("Copy Yuji's email address to your clipboard?")) {
    email.select();
    email.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("iamyujioshiro@gmail.com copied to clipboard successfully.")
  }
}
