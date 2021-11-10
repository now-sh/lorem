<h1 align=center>👋Welcome to the metaphorpsum project 👋</h1>
<p align=center>

a simple lorem ipsum generator with an api for use with curl  
curl <http://lorem.casjay.coffee/sentences/3>  

Mac Sentences:

```shell
function lorem_s() { curl -q -LSs https://lorum.casjay.vercel.app/sentences/${@:-1} | pbcopy ;}
```

Mac Paragraphs:

```shell
function lorem_p() { curl -q -LSs https://lorum.casjay.vercel.app/paragraphs/${@:-1} | pbcopy ;}
```

Linux Sentences:

```shell
function lorem_s() { curl -q -LSs https://lorum.casjay.vercel.app/sentences/${@:-1} | xclip -selection clipboard ;}
```

Linux Paragraphs:

```shell
function lorem_p() { curl -q -LSs https://lorum.casjay.vercel.app/paragraphs/${@:-1} | xclip -selection clipboard ;}
```

---

## Author

👤 **@casjay**

##

</p>
