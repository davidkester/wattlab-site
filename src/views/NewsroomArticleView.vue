<script>

import newsRoom from '/src/assets/news.json';
import heliosUrl from '/src/assets/ms-helios-proefvaart-53.jpg';

import { createClient } from '@sanity/client'

// Setup the Sanity client
const sanityClient = createClient({
  projectId: 'fq3bkk1h',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})


export default {
  data() {
    return {
      newsRoom,
      article: null
    }
  },
  components: {
  },
  watch: {
  },
  props: {
    lang: {
      type: String,
      required: true
    },
    year: {
      type: String, 
      required: true
    },
    month: {
      type: String, 
      required: true
    },
    title: {
      type: String, 
      required: true
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    async fetchPosts() {
      try {
        //const posts = await sanityClient.fetch(`*[_type == "press-release" && language == ${this.lang}]`)

        const query = `
          *[slug.current == $slug][0]{
            title,
            type,
            intro,
            slug,
            language,
            publishedAt,
            mainImage->{
              "caption": captionType[locale == ^.language][0],
              image{
                asset->{
                  _id,
                  url,
                  metadata { lqip, dimensions }
                },
              }
            },
            sharedImages[]->{
              image{
                asset->{
                  _id,
                  url,
                  metadata { lqip, dimensions }
                }
              },
              "caption": captionType[locale == ^.language][0]
            },
            files[]{
              asset->{
                url,
                originalFilename,
                mimeType,
                size
              }
            },
            body,
            "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
              title,
              slug,
              language
            }
          }`;

        const slug = this.title;
        const posts = await sanityClient.fetch(query, { slug });

        this.article = posts;
        console.log(posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    blockTag(style) {
      if (style === 'h1') return 'h1'
      if (style === 'h2') return 'h2'
      return 'p'
    },
    renderSpan (span, block) {
      let html = span.text

      span.marks.forEach(mark => {
        if (mark === 'strong') {
          html = `<strong>${html}</strong>`
        } else if (mark === 'em') {
          html = `<em>${html}</em>`
        } else {
          const def = block.markDefs.find(d => d._key === mark)
          if (def && def._type === 'link') {
            html = `<a href="${def.href}">${html}</a>`
          }
        }
      })

      return html
    }
  },
  mounted() { 
    //this.article = this.newsRoom.find( i => { return i.url == this.title });
    this.fetchPosts();
  }
}


</script>

<template>  


  <header class="header-newsroom">

   <Navbar :backgroundColor="'rgb(17,36, 77)'"/>

  </header>

  <section class="" style="background-color: #FAF0E6">

  <article class="article" v-if="article">
    <div class="article-header">
      <div class="category component">
        <div class="component-content">
            <div class="category-eyebrow">
                <h3 class="subtitle category_release">{{ article.type }}</h3>
                <span class="category-eyebrow__date">{{ formatDate (article.publishedAt ) }}</span>
            </div>
        </div>
      </div>

      <div class="pagetitle">
        <div class="component-content">
          <h1 class="">{{ article.title }}</h1>
        </div>
      </div>

      <div class="tertiarynav component">
        <div class="component-content">
          <hr>
        </div>
      </div>

    </div>


    <div class="summary text">
      <div class="component-content">
        <div class="summary-copy">
          {{ article.intro }}
        </div>
      </div>
    </div>

    <div class="image component ">
      <picture class="image-big image-fullbleed body-copy-wide">
        <img :src="article.mainImage.image.asset.url" class="picture-image" style="width: 100%; border-radius: 12px;" :alt="article.mainImage.caption.value.altText"/>
      </picture>

      <div class="component-content">
        <small>{{article.mainImage.caption.value.caption}}. <a :href="article.mainImage.image.asset.url" download>Download</a></small><br>
      </div>
    </div>
    

    <div class="pagebody text component">
      <div class="component-content">

        <component v-for="block in article.body" :key="block._key" :is="blockTag(block.style)">
          <div class="component-content">
            <div class="pagebody-copy">
              <span v-for="span in block.children" :key="span._key" v-html="renderSpan(span, block)">
              </span>
            </div>
          </div>
        </component>
      
      </div>
    </div>


    <div class="image component" v-for="e in article.sharedImages">
      <picture class="image-big image-fullbleed body-copy-wide">
        <img :src="e.image.asset.url" class="picture-image" style="width: 100%; border-radius: 12px;" :alt="e.caption.value.altText"/>
      </picture>

      <div class="component-content">
        <small>{{e.caption.value.caption}}. <a :href="e.image.asset.url" download>Download</a></small><br>
      </div>
    </div>

    <div class="pagebody text component">
      <div class="component-content">

        <div v-if="article.files != null" style="font-weight: bold;">Downloads</div>

        <div class="component-content" v-for="f in article.files">
          <div><a :href="f.asset.url">{{f.asset.originalFilename}}</a> ({{ f.asset.size /1000 }} kB)</div>
        </div>
      
      </div>
    </div>


    

 

  </article>
</section>


  <Footer />


</template>

<style scoped>

  .header-newsroom {
    background-color: rgb(17,36, 77);
  }

  .pagebody-header {
    font-family: 'ProductSans' !important;
    color: rgb(17, 36, 77);
    font-weight: bold;
    font-style: normal;
    font-size: 24px;
  }

  p.paragraph { 
    color: rgb(86, 105, 126);
      font-size: 17px;
      line-height: 24px;
      font-weight: 300;
  }

  label {
    font-family: 'ProductSans', sans-serif;
    color: rgb(17, 36, 77);
    font-size: 16px;
    font-weight: 600;
  }
  
  li {
    margin-left: 9px;
      font-weight: 300;
      text-align: left;
      color: rgb(49, 59, 83);
    }

    @media (min-width: 1080px) {
    .header-text {
      width: 75%;
    }
    .card-text-container{
      min-height: 180px;
    }
  } 

  @media (min-width: 980px) {
 
  .image-big .component-content {
    width: 980px;
}
}

@media (max-width: 980px) {
  .image-big .component-content {
    width: 100%;
  }
}


.component-content {
    margin-left: auto;
    margin-right: auto;
    width: 653px;
  }
 .component {
    margin-left: auto;
    margin-right: auto;
    width: 980px;

  }

  /* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .component-content {
    width: 90%;
  }
 .component {
    width: 100%;

  }
}

.component {
  padding-top: 40px;
  padding-bottom: 40px;
}


.pagetitle.component {
    margin-top: 0;
    margin-bottom: 0;
}

.pagebody-copy {
    margin-bottom: 1.47059em;
}

.summary-copy {
  font-family: 'AirbnbCereal';
  font-weight: bold;
}

.image-wide .component-content {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
}

.image.image-wide {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
}

.pagebody {
  font-family: 'AirbnbCereal' !important;
}


.page-article .desktop-notification {
    padding-top: 16px;
    padding-bottom: 48px;
}

.category_release {
    color: #DA0F47;
    border-color: #DA0F47;
}

.category-eyebrow__date {
    font-family: 'AirbnbCereal' !important;
}

.subtitle {
  text-transform: uppercase;
  font-family: 'ProductSans' !important;
  color: rgb(10, 24, 51) !important;
  font-size: 12px !important;
  letter-spacing: 3px !important;
}

</style>

