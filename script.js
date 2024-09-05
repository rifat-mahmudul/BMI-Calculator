const calculateBmi = () => {
    const height = document.getElementById('height').value.trim();
    const weight = document.getElementById('weight').value.trim();
    const BMI = parseFloat(weight / height ** 2).toFixed(1);
    const result = document.getElementById('result');


    if(BMI < 18.5){
        result.innerHTML = `
            <h3 class=" mt-4 font-semibold text-xl ">Your BMI is </h3>
            <h1 class= " text-2xl font-bold text-[#3838be] bg-[#808080a5] w-36 mx-auto rounded-3xl mt-4">${BMI}</h1>

            <h3 class=" border-2 border-blue-600 p-2 mt-5 font-semibold rounded-lg text-xl">You are <span class="text-[#3838be] font-bold">Underweight</span></h3>
        `

        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
    }


    else if(BMI >= 18.5 && BMI <= 24.99){
        result.innerHTML = `
            <h3 class=" mt-4 font-semibold text-xl ">Your BMI is </h3>
            <h1 class= " text-2xl font-bold text-[#3838be] bg-[#808080a5] w-36 mx-auto rounded-3xl mt-4">${BMI}</h1>

            <h3 class=" border-2 border-blue-600 p-2 mt-5 font-semibold rounded-lg text-xl">You are <span class="text-[#3838be] font-bold">Normal</span></h3>
        `

        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
    }


    else if(BMI >= 30 && BMI <= 34.99){
        result.innerHTML = `
            <h3 class=" mt-4 font-semibold text-xl ">Your BMI is </h3>
            <h1 class= " text-2xl font-bold text-[#3838be] bg-[#808080a5] w-36 mx-auto rounded-3xl mt-4">${BMI}</h1>

            <h3 class=" border-2 border-blue-600 p-2 mt-5 font-semibold rounded-lg text-xl">You are <span class="text-[#3838be] font-bold">Class 1 obesity</span></h3>
        `

        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
    }

    else if(BMI >= 35 && BMI <= 39.99){
        result.innerHTML = `
            <h3 class=" mt-4 font-semibold text-xl ">Your BMI is </h3>
            <h1 class= " text-2xl font-bold text-[#3838be] bg-[#808080a5] w-36 mx-auto rounded-3xl mt-4">${BMI}</h1>

            <h3 class=" border-2 border-blue-600 p-2 mt-5 font-semibold rounded-lg text-xl">You are <span class="text-[#3838be] font-bold">Class 2 obesity</span></h3>
        `

        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
    }

    else if(BMI >= 40){
        result.innerHTML = `
            <h3 class=" mt-4 font-semibold text-xl ">Your BMI is </h3>
            <h1 class= " text-2xl font-bold text-[#3838be] bg-[#808080a5] w-36 mx-auto rounded-3xl mt-4">${BMI}</h1>

            <h3 class=" border-2 border-blue-600 p-2 mt-5 font-semibold rounded-lg text-xl">You are <span class="text-[#3838be] font-bold">Class 3 obesity</span> <span class=" text-red-500 font-bold">danger zone</span></h3>
        `

        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
    }

    
    else{
        alert("Invalid BMI")
    }

    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
}