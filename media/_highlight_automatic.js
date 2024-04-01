/* Copyright: Arthur Milchior <arthur@milchior.fr>
 * License: GNU GPL, version 3 or later; http://www.gnu.org/licenses/gpl.html */
function color() {
    var selector = 'pre code';
    if (typeof hljs !== 'undefined') {
        codes = $(selector);
            codes.each(
              (i, block)=>{
                hljs.highlightBlock(block);
              }
            );
    } else {
        setTimeout(color, 50)
    }
}
$(color);
