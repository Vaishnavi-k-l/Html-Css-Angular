var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
        this.contact = 0;
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this.Studentname;
        },
        //Name-------------------
        set: function (newname) {
            if (newname.length <= 15) {
                this.Studentname = newname;
            }
            else {
                console.log("Name should be less than 15 characters");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Id", {
        get: function () {
            return this.studentId;
        },
        //StudentId------------------------------
        set: function (id) {
            this.studentId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Contactnum", {
        //contact----------------------
        set: function (ph) {
            var phn = ph;
            if ((ph.toString()).length == 10) {
                this.contact = phn;
            }
            else {
                console.log("Contact should be less than 10 digits");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Contact", {
        get: function () {
            return this.contact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Address", {
        //Address------------------------
        set: function (add) {
            this.address = add;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Addressloc", {
        get: function () {
            return this.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "courseOfStudent", {
        //Course---------------
        set: function (course) {
            this.course = course;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "returnCourse", {
        get: function () {
            return this.course;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.show = function () {
        console.log("StudentID: " + this.studentId);
        console.log("Name: " + this.Studentname);
        console.log("Contact: " + this.contact);
        console.log("Address: " + this.address);
        console.log("Course: " + this.course);
    };
    Student.prototype.calculateFee = function () {
        switch (this.course) {
            case "CS":
                console.log("Your fee is Rs. 9000");
                break;
            case "EC":
                console.log("Your fee is Rs. 10000");
                break;
            case "Civil":
                console.log("Your fee is Rs. 12000");
                break;
        }
    };
    return Student;
}());
var FastTrackBatchStudent = /** @class */ (function (_super) {
    __extends(FastTrackBatchStudent, _super);
    function FastTrackBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FastTrackBatchStudent.prototype.calculateFee = function () {
        if (this.course === "CS") {
            console.log("Your fee is Rs.10000");
        }
    };
    return FastTrackBatchStudent;
}(Student));
var CorporateBatchStudent = /** @class */ (function (_super) {
    __extends(CorporateBatchStudent, _super);
    function CorporateBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CorporateBatchStudent.prototype.calculateFee = function () {
        console.log("Your fee is Rs.20000");
    };
    return CorporateBatchStudent;
}(Student));
var WeekendBatchStudent = /** @class */ (function (_super) {
    __extends(WeekendBatchStudent, _super);
    function WeekendBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeekendBatchStudent.prototype.calculateFee = function () {
        console.log("Your fee is Rs.30000");
    };
    return WeekendBatchStudent;
}(Student));
var CorporateWeekendBatchStudent = /** @class */ (function (_super) {
    __extends(CorporateWeekendBatchStudent, _super);
    function CorporateWeekendBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CorporateWeekendBatchStudent.prototype.calculateFee = function () {
        console.log("Your fee is Rs.40000");
    };
    return CorporateWeekendBatchStudent;
}(Student));
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
var s2 = new FastTrackBatchStudent();
s2.Studentname = "A";
s2.Studentname = "Vaish";
s2.studentId = 1;
s2.contact = 12345678912;
s2.address = "mhgfd";
s2.course = "CS";
s2.calculateFee();
s2.show();
