const title = document.getElementById('title');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');

const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');


const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const f9 = document.getElementById('f9');
const f10 = document.getElementById('f10');
const f11 = document.getElementById('f11');
const f12 = document.getElementById('f12');
const f13 = document.getElementById('f13');
const f14 = document.getElementById('f14');
const f15 = document.getElementById('f15');
const f16 = document.getElementById('f16');

const g0 = document.getElementById('header');
const g1 = document.getElementById('myCarousel');
const g2 = document.getElementById('service');
const g3 = document.getElementById('about');
const g4 = document.getElementById('price');
const g5 = document.getElementById('team');
const g6 = document.getElementById('contact');
const g7 = document.getElementById('footer');



const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}


  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);
 // Extract the filename from the path
             const fileName = pageName.split('/').pop();

             if (fileName === 'index.html' || fileName === '') {
               
             
            // Update content based on the current page
            updateContent(title, mergedData.title.title);

            updateLinkContent(nav0, mergedData.nav.nav0);
            updateLinkContent(nav1, mergedData.nav.nav1);
            updateLinkContent(nav2, mergedData.nav.nav2);
            updateLinkContent(nav3, mergedData.nav.nav3);
            updateLinkContent(nav4, mergedData.nav.nav4);

            updateContent(b0, mergedData.banner.b0);
            updateContent(b1, mergedData.banner.b1);
            updateContent(b2, mergedData.banner.b2);
            updateContent(b3, mergedData.banner.b3);
            updateContent(b4, mergedData.banner.b4);
            updateContent(b5, mergedData.banner.b5);
            updateContent(b6, mergedData.banner.b6);
            updateContent(b7, mergedData.banner.b7);
            updateContent(b8, mergedData.banner.b8);
            updateContent(b9, mergedData.banner.b9);
            updateContent(b10, mergedData.banner.b10);   
            updateContent(b11, mergedData.banner.b11);

                   
            updateContent(a0, mergedData.about.a0);
            updateContent(a1, mergedData.about.a1);
            updateContent(a2, mergedData.about.a2);

            updateContent(s0, mergedData.service.s0);
            updateContent(s1, mergedData.service.s1);
            updateContent(s2, mergedData.service.s2);
            updateContent(s4, mergedData.service.s4);
            updateContent(s5, mergedData.service.s5);
            updateContent(s6, mergedData.service.s6);
            updateContent(s7, mergedData.service.s7);
            updateContent(s8, mergedData.service.s8);

            updateContent(p0, mergedData.price.p0);
            updateContent(p1, mergedData.price.p1);
            updateContent(p2, mergedData.price.p2);
            updateContent(p3, mergedData.price.p3);
            updateContent(p4, mergedData.price.p4);
            updateContent(p5, mergedData.price.p5);
            updateContent(p6, mergedData.price.p6);

            updateContent(t0, mergedData.team.t0);
            updateContent(t1, mergedData.team.t1);
            updateContent(t2, mergedData.team.t2);
            updateContent(t3, mergedData.team.t3);
            updateContent(t4, mergedData.team.t4);
            updateContent(t5, mergedData.team.t5);
            updateContent(t6, mergedData.team.t6);
            updateContent(t7, mergedData.team.t7);

            updateContent(c0, mergedData.contact.c0);
      
            updateContent(f0, mergedData.footer.f0);
            updateContent(f1, mergedData.footer.f1);
            updateContent(f2, mergedData.footer.f2);
            updateContent(f3, mergedData.footer.f3);
            updateContent(f4, mergedData.footer.f4);
            updateContent(f5, mergedData.footer.f5);
            updateContent(f6, mergedData.footer.f6);
            updateContent(f7, mergedData.footer.f7);
            updateContent(f8, mergedData.footer.f8);
            updateContent(f9, mergedData.footer.f9);
            updateContent(f10, mergedData.footer.f10);
            updateContent(f11, mergedData.footer.f11);
            updateContent(f12, mergedData.footer.f12);
            updateContent(f13, mergedData.footer.f13);
            updateContent(f14, mergedData.footer.f14);
            updateContent(f15, mergedData.footer.f15);
            updateContent(f16, mergedData.footer.f16);

            updateBackgroundColor(g0, mergedData.color.header);
            updateBackgroundColor(g1, mergedData.color.myCarousel);
            updateBackgroundColor(g2, mergedData.color.service);
            updateBackgroundColor(g3, mergedData.color.about);
            updateBackgroundColor(g4, mergedData.color.price);
            updateBackgroundColor(g5, mergedData.color.team);
            updateBackgroundColor(g6, mergedData.color.contact);
            updateBackgroundColor(g6, mergedData.color.footer);

    
            updateImageSrc(img1, mergedData.images.img1);
            updateImageSrc(img2, mergedData.images.img2);
            updateImageSrc(img3, mergedData.images.img3);
            updateImageSrc(img4, mergedData.images.img4);
            updateImageSrc(img5, mergedData.images.img5);
            updateImageSrc(img6, mergedData.images.img6);
            updateImageSrc(img7, mergedData.images.img7);
            updateImageSrc(img8, mergedData.images.img8);
            updateImageSrc(img9, mergedData.images.img9);
            updateImageSrc(img10, mergedData.images.img10);
            updateImageSrc(img11, mergedData.images.img11);
            updateImageSrc(img12, mergedData.images.img12);
            updateImageSrc(img13, mergedData.images.img13);
            
           
           

            } else if (fileName === 'about.html') {

            } else if (fileName === 'contact.html') {

            } else if (fileName === 'pricing.html') {

            } else if (fileName === 'we-do.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});