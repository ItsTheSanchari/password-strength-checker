let status = []

let strength = 0
doesContain = (arg1,arg2)=> {
    arg1.forEach(element => {
        switch(element) {
            case 'letter': 
                    if(arg2.length > 8) {
                        
                        status.push(
                            {       testName:'letterStrength',
                                    testResult: 1 ,// 1 stands for true,
                                    message:'Contains more than 8 lettes',
                            }
                            )
                    }   else {
                        status.push(
                            {       testName:'letterStrength',
                                    testResult: 0 ,// 1 stands for true,
                                    message:'Contains lesser than 8 lettes',
                            }
                            )
                    } 
                break;
             case 'uppercase': 
                    if(arg2.toLowerCase() != arg2) {
                        status.push({
                            testName : 'containsUpperCase',
                            testResult: 1,
                            message: 'Needs to have a charecter in capital'
                        })
                    } else {
                        status.push({
                            testName : 'containsUpperCase',
                            testResult: 0,
                            message: 'Does contain a charecter in capital'
                        })
                    }
                 break;
             case 'lowercase':
                 if(arg2.toUpperCase() != arg2) { 
                    status.push({
                        testName : 'containsLowerCase',
                        testResult: 1,
                        message: 'Needs to have a charecter in small letter'
                    })  
                 } else {
                    status.push({
                        testName : 'containsLowerCase',
                        testResult: 0,
                        message: 'Does contain a charecter in small'
                    })

                 } 

                 break;
             case 'specialcharecter':
                let specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ 
                if(specialChar.test(arg2)) {
                    status.push({
                        testName : 'containsSpecialCharecter',
                        testResult: 1,
                        message: 'Contans special charecter'
                    })
                } else {
                    status.push({
                        testName : 'containsSpecialCharecter',
                        testResult: 0,
                        message: 'Needs to have a special charecter'

                    })
                }
                 break;
             case 'number':
                let numRegex = /\d/g
                if(numRegex.test(arg2)) {
                    status.push({
                        testName : 'containsNumber',
                        testResult: 1,
                        message: 'Contans number'
                    })
 
                } else {
                    status.push({
                        testName : 'containsNumber',
                        testResult: 0,
                        message: 'must contain a number'
                    })
                }
                 break;
             
        }
        
    });
    return status
       
    }
    module.exports = doesContain
  
