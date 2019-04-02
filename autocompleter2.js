Vue.component('v-autocompleter', {
    props: ["input"],
    computed: {
        results: function () {
            let pattern = new RegExp('^' + this.input, 'i');
            let results = window.animals.filter(function (word) {
                return pattern.test(word);
            });
            return results.length > 7 ? results.slice(0, 6) : results;
        }
    },
    template:
        `<div class="autocompleter">
          <table class ="autocomplete-results">
             <tr class="autocomplete-result"
                   v-for="(result, i) in results" :key="i">{{ result }}</tr>
          </table>
        </div>`
})

new Vue({
    el: ".autocompleter",
    data: function () {
        return {
            inputContent: "",
            showAutocompleter: this.inputContent ? true : false
        }
    }
})