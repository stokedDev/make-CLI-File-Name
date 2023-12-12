# String To CLI-Friendly File Name Converter
## Browser Console Application
<p>Note: The makeFileName() function may not be sufficient for all desired file name outputs.<br>
In the file name output, sections of white-space are replaced with a single dash and symbols are removed.<br>
It works for string inputs as shown in the following examples.</p>
<code>
    makeFileName('How To          Tie A Shoelace The 2023 Way'); <br>
    /* returns 'how-to-tie-a-shoelace-the-2023-way' */
    <br>
    <br>
    makeFileName('usbcush 67 xhgx% ()#');<br> 
    /* returns 'usbcush-67-xhgx' */
</code>
<h2>Instructions</h2>
<ol>
    <li>Open the index.html file of this make-cli-file-name directory in a web browser.</li> 
    <li>Call the makeFileName function with your non-CLI-friendly file name string passed as its argument in your browser console.</li> 
    <li>Copy the returned string and paste it as your CLI friendly file name.</li> 
</ol>