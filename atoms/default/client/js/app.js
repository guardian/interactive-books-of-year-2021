// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"


const interactiveWrapper = document.querySelector('.content__main-column--interactive')

// get all blockquotes and add class
const blockquoteElement = interactiveWrapper.querySelectorAll('blockquote')
const newDiv = document.createElement("span")
newDiv.classList.add("arrow")
newDiv.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 17.274H25.6982L16.1434 28.7079L17.3855 29.95L30.6667 16.637V15.363L17.3855 2.04993L16.1434 3.29205L25.6982 14.726H1.33337V17.274Z" fill="white"/>
</svg>`
blockquoteElement.forEach((el) => {
    el.classList.add("onward-link")
    // console.log(el.firstElementChild)
    // el.firstElementChild.insertBefore(newDiv, el.firstElementChild.p)
    el.appendChild(newDiv.cloneNode(true))
})


// HACK to remove content--interactive from inner div
// As the mainmedia is added via a before element this allows it to be only shown once
const contentInteractiveClass = document.querySelectorAll(".content--interactive")
contentInteractiveClass[1].classList.remove("content--interactive")


// get all bold H2s
// const H2s = interactiveWrapper.querySelectorAll('h2')
// const strong = interactiveWrapper.querySelectorAll('strong')
// H2s.forEach(() => {
//     if (H2s.firstChild === strong) {
//     console.log("strong tag")
//     }
// })



///////// This looks for thumbnail images and adds them into a div - TODO re-visit this at some point for next years

// // Put images in a div
// const h2s = interactiveWrapper.querySelectorAll('h2')
// const thumbImages = interactiveWrapper.querySelectorAll('.element-thumbnail')

// h2s.forEach((h2) => {
//     if (h2.childNodes.tagName = 'STRONG') {
//         h2.classList.add("section-title")
//     }
//     // create divs
//     const sectionBreak = document.createElement('div')
//     const coverWrapper = document.createElement('div')
//     const illustrationWrapper = document.createElement('div')
//     // add classes
//     sectionBreak.classList.add("section-break")
//     coverWrapper.classList.add("cover-wrapper")
//     illustrationWrapper.classList.add("illustration-wrapper")

    
//     // empty array for thumb images to be added
//     const figures = []
//     const illos = []
//     // loop thumb images
//     let el = h2
//     while (el.nextElementSibling && el.nextElementSibling.tagName != 'H2') {
//         el=el.nextElementSibling
//         if (el.classList.contains('element-thumbnail')) {
//             figures.push(el)
//         } else if (el.classList.contains('element-inline')) {
//             illos.push(el)
//         }
//     }

//     console.log(illos)
//     console.log(sectionBreak)
    
//     illos.forEach((illo) => {
//         illustrationWrapper.appendChild(illo)
//     })
//     // h2.insertAdjacentElement('afterend', illustrationWrapper)
    
//     figures.forEach((figure) => {
//         coverWrapper.appendChild(figure)
//     })
//     // illustrationWrapper.insertAdjacentElement('afterend', coverWrapper)

//     h2.insertAdjacentElement('afterend', sectionBreak)
//     sectionBreak.appendChild(h2)
//     sectionBreak.appendChild(illustrationWrapper)
//     sectionBreak.appendChild(coverWrapper)

// })

// Put images in a div
const h2s = interactiveWrapper.querySelectorAll('h2')
const thumbImages = interactiveWrapper.querySelectorAll('.element-thumbnail')

h2s.forEach((h2) => {
    if (h2.childNodes.tagName = 'STRONG') {
        h2.classList.add("section-title")
    }
    // create divs
    const sectionBreak = document.createElement('div')
    const illustrationWrapper = document.createElement('div')
    // add classes
    sectionBreak.classList.add("section-break")
    illustrationWrapper.classList.add("illustration-wrapper")

    
    // empty array for thumb images to be added
    const figures = []
    const illos = []
    // loop thumb images
    let el = h2
    while (el.nextElementSibling && el.nextElementSibling.tagName != 'H2') {
        el=el.nextElementSibling
        if (el.classList.contains('element-thumbnail')) {
            figures.push(el)
        } else if (el.classList.contains('element-inline')) {
            illos.push(el)
        }
    }

    console.log(illos)
    console.log(sectionBreak)
    
    illos.forEach((illo) => {
        illustrationWrapper.appendChild(illo)
    })

    h2.insertAdjacentElement('afterend', sectionBreak)
    sectionBreak.appendChild(h2)
    sectionBreak.appendChild(illustrationWrapper)

})