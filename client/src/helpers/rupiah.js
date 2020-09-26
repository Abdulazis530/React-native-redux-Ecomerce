export default function numToRupiah(num){
    const stringedNumber = num.toString();
    let rupiah = '';
    //reverse the string
    let reversedStringNum = stringedNumber.split('').reverse().join('');
    for (let i = 0; i < reversedStringNum.length; i++) {
        if (i % 3 === 0) {
            rupiah += reversedStringNum.substr(i, 3) + '.';
        }
    }

    return `Rp.${rupiah.split('').reverse().join('').slice(1)},-`;

}
