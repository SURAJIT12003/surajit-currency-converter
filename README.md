# surajit-currency-converter

Description

This package is a Currency Converter. It’s a simple and efficient tool that allows you to convert between different currencies. The package takes two input fields: the current currency and the currency to which you want to convert. It then returns the converted value based on the latest exchange rates.

Installation

First, install the package using npm:

npm i surajit-currency-converter

Sample Usages - 

```javascript 
import { convertCurrency } from "/surajit-currency-converter";

convertCurrency("IND","USD",3).then(res=>{
    console.log(res);
});



