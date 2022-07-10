module.exports = function toReadable (number) {
    let num=number;

    let ReadNumber ='';
        if(num == 0) ReadNumber = 'zero';

        if(Math.trunc(num/100)){
            switch(Math.trunc(num/100)){
                case 0:
                    ReadNumber += 'zero';
                    break;
                case 1:
                    ReadNumber += 'one';
                    break;
                case 2:
                    ReadNumber += 'two';
                    break;
                case 3:
                    ReadNumber += 'three';
                    break;
                case 4:
                    ReadNumber += 'four';
                    break;
                case 5:
                    ReadNumber += 'five';
                    break;
                case 6:
                    ReadNumber += 'six';
                    break;
                case 7:
                    ReadNumber += 'seven';
                    break;
                case 8:
                    ReadNumber += 'eight';
                    break;
                case 9:
                    ReadNumber += 'nine';
                    break;
                default:
                    break;
            }
            if (num%100 === 0) ReadNumber += ' hundred'
            else ReadNumber += ' hundred ';
        }


        if(num%100 < 20){
            switch(num%100){
                case 1:
                    ReadNumber += 'one';
                    break;
                case 2:
                    ReadNumber += 'two';
                    break;
                case 3:
                    ReadNumber += 'three';
                    break;
                case 4:
                    ReadNumber += 'four';
                    break;
                case 5:
                    ReadNumber += 'five';
                    break;
                case 6:
                    ReadNumber += 'six';
                    break;
                case 7:
                    ReadNumber += 'seven';
                    break;
                case 8:
                    ReadNumber += 'eight';
                    break;
                case 9:
                    ReadNumber += 'nine';
                    break;
                case 10:
                    ReadNumber += 'ten';
                    break;
                case 11:
                    ReadNumber += 'eleven';
                    break;
                case 12:
                    ReadNumber += 'twelve';
                    break;
                case 13:
                    ReadNumber += 'thirteen';
                    break;
                case 14:
                    ReadNumber += 'fourteen';
                    break;
                case 15:
                    ReadNumber += 'fifteen';
                    break;
                case 16:
                    ReadNumber += 'sixteen';
                    break;
                case 17:
                    ReadNumber += 'seventeen';
                    break;
                case 18:
                    ReadNumber += 'eighteen';
                    break;
                case 19:
                    ReadNumber += 'nineteen';
                    break;
                default:
                    break;
            }
        } else {
            switch(num%100 - num%10){
                case 20:
                    ReadNumber += 'twenty';
                    break;
                case 30:
                    ReadNumber += 'thirty';
                    break;
                case 40:
                    ReadNumber += 'forty';
                    break;
                case 50:
                    ReadNumber += 'fifty';
                    break;
                case 60:
                    ReadNumber += 'sixty';
                    break;
                case 70:
                    ReadNumber += 'seventy';
                    break;
                case 80:
                    ReadNumber += 'eighty';
                    break;
                case 90:
                    ReadNumber += 'ninety';
                    break;
            }
            if(num%10 != 0){
                ReadNumber += ' ';
                switch(num%10){
                    case 1:
                        ReadNumber += 'one';
                        break;
                    case 2:
                        ReadNumber += 'two';
                        break;
                    case 3:
                        ReadNumber += 'three';
                        break;
                    case 4:
                        ReadNumber += 'four';
                        break;
                    case 5:
                        ReadNumber += 'five';
                        break;
                    case 6:
                        ReadNumber += 'six';
                        break;
                    case 7:
                        ReadNumber += 'seven';
                        break;
                    case 8:
                        ReadNumber += 'eight';
                        break;
                    case 9:
                        ReadNumber += 'nine';
                        break;
                    default:
                        break;
                }
            }
        }

    return ReadNumber;
}
