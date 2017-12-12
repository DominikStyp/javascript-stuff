class Animal {
        shout(text){
            window.alert(text);
        }
        static alertSomething(){
            alert("something");
        }
        test(){
            this.alertSomething(); // Uncaught TypeError: this.alertSomething is not a function
                                   // but if alertSomething wouldn't have been static, it would have worked.
        }
}

// Animal.alertSomething(); // OK

export default Animal;