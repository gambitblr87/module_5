const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";
const buttonFetch = $('#button-fetch');
const buttonReplace = $('#button-replace');
const result = $('#result');

let arrText;

$.getJSON(dataURL, function (data) {
  return arrText = data.text;
});

buttonFetch.click(function () {
  result.html(arrText);
});
buttonReplace.click(function () {

  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speach = $("input[name=speach]").val();

  let index, len;
  let newText1 = [];
  for (index = 0, len = arrText.length; index < len; ++index) {

    let text1;
    text1 = arrText[index].replace(/{var1}/g, var1).replace(/{var2}/g, var2).replace(/{var3}/g, var3).replace(/{var4}/g, var4).replace(/{var5}/g, var5).replace(/{var6}/g, var6).replace(/{speach}/g, speach);
    newText1.push(text1);
  };

  result.html(newText1);

});