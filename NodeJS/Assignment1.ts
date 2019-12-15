class Student
{
    studentId : number;
    Studentname: string;
    contact : number = 0;
    address : string;
    course: string;
    fee?: number;

    //Name-------------------
    set Name(newname : string)
    {
        if(newname.length <= 15)
        {
            this.Studentname = newname;
        }
        else
        {
            console.log("Name should be less than 15 characters");
        }
    }

    get Name(): string
    {
        return this.Studentname;
    }
    
    //StudentId------------------------------
    set Id(id : number)
    {
            this.studentId = id;
    }
     get Id(): number
     {
         return this.studentId;
     }

     //contact----------------------
     set Contactnum(ph : number)
    {
        var phn = ph;
        if((ph.toString()).length == 10)
        {
            this.contact = phn;
        }
         else
         {
           console.log("Contact should be less than 10 digits");
         }
           
    }
     get Contact(): number
     {
         return this.contact;
     }

     //Address------------------------
     set Address(add : string)
    {
            this.address = add;
    }
     get Addressloc(): string
     {
         return this.address;
     }

     //Course---------------
     set courseOfStudent(course : string)
    {
            this.course = course;
    }
     get returnCourse(): string
     {
         return this.course;
     }

     show()
    {
        console.log(`StudentID: ${this.studentId}`);
        console.log(`Name: ${this.Studentname}`);
        console.log(`Contact: ${this.contact}`);
        console.log(`Address: ${this.address}`);
        console.log(`Course: ${this.course}`);
    }

    calculateFee()
    {
        switch(this.course)
        {
            case "CS" : console.log("Your fee is Rs. 9000");
                        break;
            case "EC": console.log("Your fee is Rs. 10000");
                        break;
            case "Civil": console.log("Your fee is Rs. 12000");
                        break;
        }
    }

   
}

class FastTrackBatchStudent extends Student
{
    calculateFee()
    {
        if(this.course === "CS")
        {
            console.log("Your fee is Rs.10000");
        }
       
    }
}

class CorporateBatchStudent extends Student
{
    calculateFee()
    {
        console.log("Your fee is Rs.20000");
    }
}

class WeekendBatchStudent extends Student
{
    calculateFee()
    {
        console.log("Your fee is Rs.30000");
    }
}


class CorporateWeekendBatchStudent extends Student
{
    calculateFee()
    {
        console.log("Your fee is Rs.40000");
    }
}

// function  getlength(num) {
//     return num.toString().length;
//     //return number.toString().length;
// }


// let student1: Student = new Student();
// student1.Studentname = "Vaish";
// student1.studentId = 1;
// student1.contact = 9473839272;
// student1.address = "mhgfd";
// student1.course = "CS";
// student1.show();



let s2 : FastTrackBatchStudent = new FastTrackBatchStudent();
s2.Name = "A";
s2.Id = 1;
s2.Contactnum = 12345678912;
s2.Address = "mhgfd";
s2.courseOfStudent = "CS";
s2.calculateFee();
s2.show();