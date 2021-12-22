export default () => {

    function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      return rand;
    }

    function operatorOnline(min, max) {
      var op_on = randomInteger(min, max),
        op_raz = op_on - randomInteger(5, 9);
      $(".footer__count--online").text(op_on);
      $(".footer__count--offline").text(op_raz);
      setTimeout(operatorOnline, 15000, 42, 24);
    }

    operatorOnline(42, 24);

}
