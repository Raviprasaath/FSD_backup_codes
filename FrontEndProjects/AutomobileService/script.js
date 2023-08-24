
let modelNumbersDropDown = "";

document.getElementById('cars-name').addEventListener('change', (event) => {
    let nameOfCar = event.target.value;
    const modelNamesDropdown = document.getElementById('cars-model');

    if (nameOfCar === 'Maruti Suzuki') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Ciaz">Ciaz</option>
            <option value="Swift">Swift</option>
            <option value="Wagon R">Wagon R</option>
            <option value="Dzire">Dzire</option>
            <option value="Vitara Brezza">Vitara Brezza</option>
            <option value="Baleno">Baleno</option>
            <option value="Ertiga">Ertiga</option>
            <option value="Celerio">Celerio</option>
            <option value="S-Presso">S-Presso</option>
            <option value="Ignis">Ignis</option>
            <option value="S-Cross">S-Cross</option>
            <option value="Alto K10">Alto K10</option>`;
    } else if (nameOfCar === 'TATA') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Altroz">Altroz</option>
            <option value="Tiago">Tiago</option>
            <option value="Tigor">Tigor</option>
            <option value="Nexon">Nexon</option>
            <option value="Harrier">Harrier</option>
            <option value="Safari">Safari</option>
            <option value="Tigor EV">Tigor EV</option>
            <option value="Nexon EV">Nexon EV</option>
            <option value="Tiago NRG">Tiago NRG</option>
            
            `;
    } else if (nameOfCar === 'Honda') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="City">City</option>
            <option value="Civic">Civic</option>
            <option value="Accord">Accord</option>
            <option value="Amaze">Amaze</option>
            <option value="WR-V">WR-V</option>
            <option value="Jazz">Jazz</option>
            <option value="CR-V">CR-V</option>
            <option value=""></option>
            <option value=""></option>            
            
            `;
    } else if (nameOfCar === 'Hyundai') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Grand i10">Grand i10</option>
            <option value="Elite i20">Elite i20</option>
            <option value="i20 Active">i20 Active</option>
            <option value="Venue">Venue</option>
            <option value="Verna">Verna</option>
            <option value="Aura">Aura</option>
            <option value="Elantra">Elantra</option>
            <option value="Creta">Creta</option>
            
            `;
    } else if (nameOfCar === 'Volkswagen') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Polo">Polo</option>
            <option value="Vento">Vento</option>
            <option value="Taigun">Taigun</option>
            <option value="Tiguan">Tiguan</option>
            <option value="Passat">Passat</option>
            <option value="Jetta">Jetta</option>            
            `;
    } else if (nameOfCar === 'Mahindra & Mahindra') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="XUV300">XUV300</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Thar">Thar</option>
            <option value="Bolero">Bolero</option>
            <option value="Marazzo">Marazzo</option>
            <option value="XUV500">XUV500</option>
            <option value="KUV100 NXT">KUV100 NXT</option>
            <option value="TUV300">TUV300</option>
            `;
    } else if (nameOfCar === 'Kia') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Seltos">Seltos</option>
            <option value="Sonet">Sonet</option>
            <option value="Carnival">Carnival</option>
            <option value="Sportage">Sportage</option>
            
            `;
    } else if (nameOfCar === 'MG Motor') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Hector">Hector</option>
            <option value="ZS EV">ZS EV</option>
            <option value="Gloster">Gloster</option>
            <option value="Astor">Astor</option>
            
            `;
    } else if (nameOfCar === 'Toyota') {
        modelNumbersDropDown =
            ` <option selected disabled value="Select Model Number">Select Model Number</option>
            <option value="Yaris">Yaris</option>
            <option value="Corolla">Corolla</option>
            <option value="Camry">Camry</option>
            <option value="Avalon">Avalon</option>            
            `;
    }


    

    modelNamesDropdown.innerHTML = modelNumbersDropDown;
});



// login
document.getElementById('login-button').addEventListener('click', (e)=> {
    e.preventDefault();
    document.getElementById('add-detail').innerHTML =
    `<input type="text" placeholder="Full Name" name="name" id="fname" required>
    <input type="password" placeholder="Password" name="password" id="password" required>
    <a href="index_page_2.html" target="_blank">
        <button id="signup-btn">
            Click Here
        </button>
    </a>
    

    `
    
})
document.getElementById('signup-btn').addEventListener('click', (e)=> {
    e.preventDefault();
    document.getElementById('add-detail').innerHTML =
    `<input type="text" placeholder="Full Name" name="name" id="fname" required>
    <input type="password" placeholder="Password" name="password" id="password" required>
    <input type="password" placeholder="Confirm Password" name="password" id="password" required>
    <input type="number" placeholder="Mobile Number" name="number" id="mnumber" required>
    

    <button><a href="http://127.0.0.1:5500/FrontEndProjects/AutomobileService/index_page_2.html" id="btnbtn">clikc me</a></button>
    
    `

})
