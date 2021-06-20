let email = document.getElementById("email-address");
let emailButton = document.getElementById("email-logo");

emailButton.addEventListener("click", () => {
  email.setAttribute("type", "text");
  copyEmailToClipboard();
  email.setAttribute("type", "hidden");
})

copyEmailToClipboard = () => {
  if (confirm("Copy iamyujioshiro@gmail.com to clipboard?")) {
    email.select();
    email.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("Email address copied to clipboard.")
  }
}
