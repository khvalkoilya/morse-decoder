const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str="", start=0, end=10, element, array=[];
    if(expr.length%10!=0) throw new Error;
    let lengthOfStr=expr.length/10;
    for(let i=1;i<=lengthOfStr;i++,start+=10,end+=10) {
        element=expr.slice(start,end);
        if(element=="**********") str+=" ";
        else {
            while(element[0]!=1) element=element.slice(1);
            let char="";
            for(let j=0;j<element.length;j+=2)
                if(element[j+1]=="0") char+=".";
                else char+="-";
                str+=MORSE_TABLE[char];
        }
    }
    return str;
}


module.exports = {
    decode
}