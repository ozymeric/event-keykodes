const insert = document.getElementById('insert')

window.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(`key: ${event.key}`);
  console.log(`keyCode: ${event.keyCode}`);
  console.log(`code: ${event.code}`);
  // NOW WE WILL COPY AND PASTE THE HTML CODE WE'VE CREATED BEFORE TO SEE HOW IT
  // WORKS, AND IMPLEMENT IT BY USING "insert.innerHTML" method to see it when we
  // click on any key.
  insert.innerHTML = `
  <div class="key">
    <!--#{event.key} would be the code normally but:-->
    <!--
    The problem here is: if we press "space", we see nothing in this div.
    Because the event key of space is " ", which is nothing, so we'll see a blonk.
    In order to handle this issue, we'll use a conditional.
    But the method(the syntax) of this conditional while adding innerHTML is a little different.
    -->
    ${event.key === " " ? "Space" : event.key}
    <!--Here the code means: if event.key is equal to(===) " ", then(?) put "Space",
    else(:) put event.key
    So, this is how we handle conditionals within an HTML. We call this a
    """shorthand conditional""".
    -->

    <small>event.key</small>
  </div>
  <div class="key">
     ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
     ${event.code}
    <small>event.code</small>
  </div>
  `
})
// So, this is how we fetch the related data-set by using javaScript keydown eventListener.

// Now, instead of determining a variable for the divs we'll use to show our data-set and then implementing these data to these div's textContent;
// we'll use an alternative way to implement this data-set into our html file.



/*
####################################################################
####################################################################
######################### - UDEMY SOLUTION - #######################
####################################################################
####################################################################
*/
/*
const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key}
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})
*/
