window.onload = function () {
document.body.style.background = "black";
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.height = "100vh";
container.style.fontFamily = "Arial, sans-serif";
container.style.color = "black";

const formBox = document.createElement("div");
formBox.style.background = "white";
formBox.style.padding = "50px";
formBox.style.borderRadius = "8px";
formBox.style.width = "360px";
formBox.style.textAlign = "center";
const heading = document.createElement("h2");
heading.textContent = "Create a new account";
const sub = document.createElement("p");
sub.textContent = "It's quick and easy.";
sub.style.color = "#555";
const message = document.createElement("div");
message.style.display = "none";
message.style.padding = "12px";
message.style.marginBottom = "15px";
message.style.borderRadius = "6px";
const form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "10px";

const firstSurnameRow = makeRow(
    createInput("text", "🧑‍🧒 First name"),
    createInput("text", "🧑‍🧑‍🧒‍🧒 Surname")
);

const mobileRow = makeRow(
    createInput("text", "📱 Mobile number or email address"),
    createSelect(["👤 Select Gender", "Male", "Female"])
);

const passConfirmRow = makeRow(
    createInput("password", "🔐 Password"),
    createInput("password", "🔐 Confirm Password")
);

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Register";
btn.style.background = "#0F4D68";
btn.style.color = "white";
btn.style.padding = "12px";
btn.style.fontSize = "16px";
btn.style.fontWeight = "bold";
btn.style.border = "none";
btn.style.borderRadius = "6px";
btn.style.cursor = "pointer";

const orText = document.createElement("p");
orText.textContent = "or login with";
orText.style.textAlign = "center";
orText.style.color = "#555";
orText.style.marginTop = "15px";
orText.style.marginBottom = "5px";
const googleLink = document.createElement("a");
googleLink.href = "https://www.google.com";
googleLink.textContent = "Login with Google";
googleLink.style.display = "block";
googleLink.style.textAlign = "center";
googleLink.style.color = "#00aaff";
googleLink.style.textDecoration = "none";
googleLink.style.fontWeight = "bold";
googleLink.target = "_blank";
form.append(firstSurnameRow, mobileRow, passConfirmRow, btn);
formBox.append(heading, sub, message, form, orText, googleLink);
container.append(formBox);
document.body.append(container);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = firstSurnameRow.querySelector("input");
    const surname = firstSurnameRow.querySelectorAll("input")[1];
    const password = passConfirmRow.querySelector("input");
    const confirmPassword = passConfirmRow.querySelectorAll("input")[1];
    const genderValue = mobileRow.querySelector("select").value;

    if (password.value !== confirmPassword.value) {
        showMessage("⚠ كلمة السر وتأكيدها غير متطابقين.", true);
        return;
    }

    showMessage(`
        <h3>مرحبًا ${firstName.value} ${surname.value} 👋</h3>
        <p>تم تسجيلك بنجاح</p>
        <p>Gender: ${genderValue}</p>
    `);
    });

function createInput(type, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.style.flex = "1";
    input.style.padding = "10px";
    input.style.fontSize = "14px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "4px";
    return input;
}

function createSelect(options) {
    const select = document.createElement("select");
    select.style.padding = "10px";
    select.style.fontSize = "14px";
    select.style.border = "1px solid #ccc";
    select.style.borderRadius = "4px";
    select.style.flex = "1";

    options.forEach((opt, i) => {
        const option = new Option(opt, opt, i === 0, i === 0);
        if (i === 0) option.disabled = true;
        select.add(option);
    });
    return select;
}

function makeRow(...elements) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.gap = "10px";
    row.append(...elements);
    return row;
}

function showMessage(html, isError = false) {
    message.innerHTML = html;
    message.style.display = "block";
    message.style.background = isError ? "#ffeef0" : "#e8f4ff";
    message.style.border = isError ? "1px solid #f5c2c7" : "1px solid #bcdfff";
    message.style.color = isError ? "red" : "black";
}
};