class TeachMeTypeScript {
    public static arrow(): number {
        console.log("**** TeachMeTypeScript.arrow...");
        const evens = [2,4,6,8,10,20]
        var odds = evens.map(v => v + 1);
        var nums = evens.map((v, i) => v + i);
        var pairs = evens.map(v => ({even: v, odd: v + 1}));
        var filter = evens.filter(x => x > 5);

        console.log(odds);
        console.log(nums);
        console.log(pairs);
        console.log(filter);

        var reduce = evens.reduce((x,y) => {
            console.log('reduce me');
            console.log(`${x} + ${y}`);
            return x+y;
        });
        console.log(reduce);

        // Lexical this
        var bob = {
            _name: "Bob",
            _friends: ["Sue", "Mindy", 5],
            printFriends() {
                console.log('printfriends...');
                this._friends.forEach(f =>
                    console.log(this._name + " knows " + f));
            }
        }
        bob.printFriends();

        return 0;

    }

    public static spread() {
        console.log("**** TeachMeTypeScript.spread...");
        function f(x, ...y) {
            // y is an Array
            console.log(y);
            console.log(y.length);
            return x * y.length;
          }

          
          console.log(f(3, "hello", "yoyo") == 6);
    }

    public static array() {
        console.log("**** TeachMeTypeScript.array...");
        let list: number[] = [1,2,3];
        console.log(list.length);

        //generic array type
        let list2: Array<number> = [3,4];
        console.log(list2.length);
    }

    public static enumDefault() {
        console.log("**** TeachMeTypeScript.enumDefault...");
        //enums begin numbering their members starting at 0
        enum Color {red, blue, purple};
        console.log("enum length: " + Object.keys(Color).length );
        console.log(Color.red == 0);    //true
        console.log(Color.purple == 2);    //true
        console.log(Color.red.toString());    //0

        //iterate
        console.log("iterate through enum...default is to list number, then name so must exclude number")
        for (let color in Color) {
            //conditional needed to exclude 0, 1, 2
            if (isNaN(Number(color)) ) {
                console.log(color);
            }
        }
    }

    public static enumString() {
        console.log("**** TeachMeTypeScript.enumString...");
        //v2.4 allows string initialation
        enum Color {red = "Red", blue = "Blue", purple = "Purple"};
        
        console.log(Color.red == "Red");    //true
        console.log(Color.purple == "Purple");    //true
        console.log(Color.blue.toString());    //"Blue"

        //iterate
        console.log("iterate through enum...")
        console.log("enum-string length: " + Object.keys(Color).length );
        for (let color in Color) {
            //conditional not needed needed to exclude 0, 1, 2
            // if (isNaN(Number(color)) ) {
                console.log(color);
            // }
        }
    }

    public static typeAssertion() {
        console.log("**** TeachMeTypeScript.typeAssertion...");
        let someValue: any = "this is a string";
        
        //<string> angle bracket
        let strLength: number = (<string>someValue).length;
        console.log(strLength);
        //as string
        let strLength2: number = (someValue as string).length;
        console.log(strLength2);
        let strLength3 = someValue.length;
        console.log(strLength3);
    }
    
    public static interface() {
        console.log("**** TeachMeTypeScript.interface...");
        interface LabelledValue {
            label: string;
        }
        
        //structural subtyping based on the shape of the obj
        function printLabel(labelledObj: {label: string}) {
            console.log("using structural subtyping...");
            console.log(labelledObj.label);
        }
        
        //interface typing
        function printLabelInterfaceBased(labelledObj: LabelledValue) {
            console.log("using interface type...");
            console.log(labelledObj.label);
        }
        
        let myObj = {size: 10, label: "Size 10 Object"};
        printLabel(myObj);
        printLabelInterfaceBased(myObj);
    }

    public static interfaceOptionalProperties() {
        console.log("**** TeachMeTypeScript.interfaceOptionalProperties...");
        interface SquareConfig {
            color?: string;
            width?: number;
        }

        interface SquareReturnType {
            color: string; 
            area: number;
        }
        
        //this function has an interface type as a param and a subtype as a return type
        function createSquare(config: SquareConfig): SquareReturnType {
            
        // function createSquare(config: SquareConfig): {color: string; area: number} {
            let newSquare: SquareReturnType = {color: "white", area: 100};
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }
        
        let mySquare = createSquare({color: "black"});
        console.log(mySquare);
    }
}

TeachMeTypeScript.arrow();
TeachMeTypeScript.spread();
TeachMeTypeScript.array();
TeachMeTypeScript.enumDefault();
TeachMeTypeScript.enumString();
TeachMeTypeScript.typeAssertion();
TeachMeTypeScript.interface();
TeachMeTypeScript.interfaceOptionalProperties();


