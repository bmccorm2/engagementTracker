import { c as create_ssr_component, d as compute_rest_props, e as escape, f as add_attribute, h as each, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component } from "../../chunks/index.js";
import "../../chunks/uneval.js";
const SimpleAutocomplete_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.autocomplete.svelte-75ckfb.svelte-75ckfb{min-width:200px;display:inline-block;max-width:100%;position:relative;vertical-align:top;height:2.25em}.autocomplete.svelte-75ckfb.svelte-75ckfb:not(.hide-arrow):not(.is-loading)::after{border:3px solid;border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:0.625em;border-color:#3273dc;right:1.125em;z-index:4}.autocomplete.show-clear.svelte-75ckfb.svelte-75ckfb:not(.hide-arrow)::after{right:2.3em}.autocomplete.svelte-75ckfb .svelte-75ckfb{box-sizing:border-box}.autocomplete-input.svelte-75ckfb.svelte-75ckfb{font:inherit;width:100%;height:100%;padding:5px 11px}.autocomplete.svelte-75ckfb:not(.hide-arrow) .autocomplete-input.svelte-75ckfb{padding-right:2em}.autocomplete.show-clear.svelte-75ckfb:not(.hide-arrow) .autocomplete-input.svelte-75ckfb{padding-right:3.2em}.autocomplete.hide-arrow.show-clear.svelte-75ckfb .autocomplete-input.svelte-75ckfb{padding-right:2em}.autocomplete-list.svelte-75ckfb.svelte-75ckfb{background:#fff;position:relative;width:100%;overflow-y:auto;z-index:99;padding:10px 0;top:0px;border:1px solid #999;max-height:calc(15 * (1rem + 10px) + 15px);user-select:none}.autocomplete-list.svelte-75ckfb.svelte-75ckfb:empty{padding:0}.autocomplete-list-item.svelte-75ckfb.svelte-75ckfb{padding:5px 15px;color:#333;cursor:pointer;line-height:1}.autocomplete-list-item.confirmed.svelte-75ckfb.svelte-75ckfb{background-color:#789fed;color:#fff}.autocomplete-list-item.selected.svelte-75ckfb.svelte-75ckfb{background-color:#2e69e2;color:#fff}.autocomplete-list-item-no-results.svelte-75ckfb.svelte-75ckfb{padding:5px 15px;color:#999;line-height:1}.autocomplete-list-item-create.svelte-75ckfb.svelte-75ckfb{padding:5px 15px;line-height:1}.autocomplete-list-item-loading.svelte-75ckfb.svelte-75ckfb{padding:5px 15px;line-height:1}.autocomplete-list.hidden.svelte-75ckfb.svelte-75ckfb{visibility:hidden}.autocomplete.show-clear.svelte-75ckfb .autocomplete-clear-button.svelte-75ckfb{cursor:pointer;display:block;text-align:center;position:absolute;right:0.1em;padding:0.3em 0.6em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);z-index:4}.autocomplete.svelte-75ckfb:not(.show-clear) .autocomplete-clear-button.svelte-75ckfb{display:none}.autocomplete.svelte-75ckfb select.svelte-75ckfb{display:none}.autocomplete.is-multiple.svelte-75ckfb .input-container.svelte-75ckfb{height:auto;box-shadow:inset 0 1px 2px rgba(10, 10, 10, 0.1);border-radius:4px;border:1px solid #b5b5b5;padding-left:0.4em;padding-right:0.4em;display:flex;flex-wrap:wrap;align-items:stretch;background-color:#fff}.autocomplete.is-multiple.svelte-75ckfb .tag.svelte-75ckfb{display:flex;margin-top:0.5em;margin-bottom:0.3em}.autocomplete.is-multiple.svelte-75ckfb .tag.is-delete.svelte-75ckfb{cursor:pointer}.autocomplete.is-multiple.svelte-75ckfb .tags.svelte-75ckfb{margin-right:0.3em;margin-bottom:0}.autocomplete.is-multiple.svelte-75ckfb .autocomplete-input.svelte-75ckfb{display:flex;width:100%;flex:1 1 50px;min-width:3em;border:none;box-shadow:none;background:none}',
  map: null
};
function safeFunction(theFunction, argument) {
  if (typeof theFunction !== "function") {
    console.error("Not a function: " + theFunction + ", argument: " + argument);
    return void 0;
  }
  let result;
  try {
    result = theFunction(argument);
  } catch (error) {
    console.warn("Error executing Autocomplete function on value: " + argument + " function: " + theFunction);
  }
  return result;
}
function safeStringFunction(theFunction, argument) {
  let result = safeFunction(theFunction, argument);
  if (result === void 0 || result === null) {
    result = "";
  }
  if (typeof result !== "string") {
    result = result.toString();
  }
  return result;
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const SimpleAutocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showList;
  let hasSelection;
  let clearable;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "searchFunction",
    "labelFieldName",
    "keywordsFieldName",
    "valueFieldName",
    "labelFunction",
    "keywordsFunction",
    "valueFunction",
    "keywordsCleanFunction",
    "textCleanFunction",
    "beforeChange",
    "onChange",
    "onFocus",
    "onBlur",
    "onCreate",
    "selectFirstIfEmpty",
    "minCharactersToSearch",
    "maxItemsToShowInList",
    "multiple",
    "create",
    "ignoreAccents",
    "matchAllKeywords",
    "sortByMatchedKeywords",
    "itemFilterFunction",
    "itemSortFunction",
    "lock",
    "delay",
    "localFiltering",
    "localSorting",
    "cleanUserText",
    "lowercaseKeywords",
    "closeOnBlur",
    "orderableSelection",
    "hideArrow",
    "showClear",
    "clearText",
    "showLoadingIndicator",
    "noResultsText",
    "loadingText",
    "moreItemsText",
    "createText",
    "placeholder",
    "className",
    "inputClassName",
    "inputId",
    "name",
    "selectName",
    "selectId",
    "title",
    "html5autocomplete",
    "autocompleteOffValue",
    "readonly",
    "dropdownClassName",
    "disabled",
    "noInputStyles",
    "required",
    "debug",
    "tabindex",
    "selectedItem",
    "value",
    "highlightedItem",
    "text",
    "highlightFilter"
  ]);
  let { items = [] } = $$props;
  let { searchFunction = false } = $$props;
  let { labelFieldName = void 0 } = $$props;
  let { keywordsFieldName = labelFieldName } = $$props;
  let { valueFieldName = void 0 } = $$props;
  let { labelFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return labelFieldName ? item[labelFieldName] : item;
  } } = $$props;
  let { keywordsFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return keywordsFieldName ? item[keywordsFieldName] : labelFunction(item);
  } } = $$props;
  let { valueFunction = function(item, forceSingle = false) {
    if (item === void 0 || item === null) {
      return item;
    }
    if (!multiple || forceSingle) {
      return valueFieldName ? item[valueFieldName] : item;
    } else {
      return item.map((i) => valueFieldName ? i[valueFieldName] : i);
    }
  } } = $$props;
  let { keywordsCleanFunction = function(keywords) {
    return keywords;
  } } = $$props;
  let { textCleanFunction = function(userEnteredText) {
    return userEnteredText;
  } } = $$props;
  let { beforeChange = function(oldSelectedItem, newSelectedItem) {
    return true;
  } } = $$props;
  let { onChange = function(newSelectedItem) {
  } } = $$props;
  let { onFocus = function() {
  } } = $$props;
  let { onBlur = function() {
  } } = $$props;
  let { onCreate = function(text2) {
    if (debug) {
      console.log("onCreate: " + text2);
    }
  } } = $$props;
  let { selectFirstIfEmpty = false } = $$props;
  let { minCharactersToSearch = 1 } = $$props;
  let { maxItemsToShowInList = 0 } = $$props;
  let { multiple = false } = $$props;
  let { create = false } = $$props;
  let { ignoreAccents = true } = $$props;
  let { matchAllKeywords = true } = $$props;
  let { sortByMatchedKeywords = false } = $$props;
  let { itemFilterFunction = void 0 } = $$props;
  let { itemSortFunction = void 0 } = $$props;
  let { lock = false } = $$props;
  let { delay = 0 } = $$props;
  let { localFiltering = true } = $$props;
  let { localSorting = true } = $$props;
  let { cleanUserText = true } = $$props;
  let { lowercaseKeywords = true } = $$props;
  let { closeOnBlur = false } = $$props;
  let { orderableSelection = false } = $$props;
  let { hideArrow = false } = $$props;
  let { showClear = false } = $$props;
  let { clearText = "&#10006;" } = $$props;
  let { showLoadingIndicator = false } = $$props;
  let { noResultsText = "No results found" } = $$props;
  let { loadingText = "Loading results..." } = $$props;
  let { moreItemsText = "items not shown" } = $$props;
  let { createText = "Not found, add anyway?" } = $$props;
  let { placeholder = void 0 } = $$props;
  let { className = void 0 } = $$props;
  let { inputClassName = void 0 } = $$props;
  let { inputId = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { selectName = void 0 } = $$props;
  let { selectId = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { html5autocomplete = void 0 } = $$props;
  let { autocompleteOffValue = "off" } = $$props;
  let { readonly = void 0 } = $$props;
  let { dropdownClassName = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { noInputStyles = false } = $$props;
  let { required = null } = $$props;
  let { debug = false } = $$props;
  let { tabindex = 0 } = $$props;
  let { selectedItem = multiple ? [] : void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { highlightedItem = void 0 } = $$props;
  const uniqueId = "sautocomplete-" + Math.floor(Math.random() * 1e3);
  let input;
  let list;
  let inputContainer;
  let opened = false;
  let loading = false;
  let highlightIndex = -1;
  let { text = void 0 } = $$props;
  let filteredListItems;
  let listItems = [];
  function safeLabelFunction(item) {
    return safeStringFunction(labelFunction, item);
  }
  function safeKeywordsFunction(item) {
    const keywords = safeStringFunction(keywordsFunction, item);
    let result = safeStringFunction(keywordsCleanFunction, keywords);
    result = lowercaseKeywords ? result.toLowerCase().trim() : result;
    if (ignoreAccents) {
      result = removeAccents(result);
    }
    if (debug) {
      console.log("Extracted keywords: '" + result + "' from item: " + JSON.stringify(item));
    }
    return result;
  }
  function prepareListItems() {
    let timerId;
    if (debug) {
      timerId = `Autocomplete prepare list ${inputId ? `(id: ${inputId})` : ""}`;
      console.time(timerId);
      console.log("Prepare items to search");
      console.log("items: " + JSON.stringify(items));
    }
    if (!Array.isArray(items)) {
      console.warn("Autocomplete items / search function did not return array but", items);
      items = [];
    }
    const length = items ? items.length : 0;
    listItems = new Array(length);
    if (length > 0) {
      items.forEach((item, i) => {
        const listItem = getListItem(item);
        if (listItem === void 0) {
          console.log("Undefined item for: ", item);
        }
        listItems[i] = listItem;
      });
    }
    filteredListItems = listItems;
    if (debug) {
      console.log(listItems.length + " items to search");
      console.timeEnd(timerId);
    }
  }
  function getListItem(item) {
    return {
      keywords: localFiltering ? safeKeywordsFunction(item) : [],
      label: safeLabelFunction(item),
      item
    };
  }
  function onSelectedItemChanged() {
    value = valueFunction(selectedItem);
    if (selectedItem && !multiple) {
      text = safeLabelFunction(selectedItem);
    }
    filteredListItems = listItems;
    onChange(selectedItem);
  }
  function unselectItem(tag) {
    if (debug) {
      console.log("unselectItem", tag);
    }
    selectedItem = selectedItem.filter((i) => i !== tag);
    input.focus();
  }
  function highlightFilter(keywords, field) {
    return (item) => {
      let label = item[field];
      const newItem = Object.assign({ highlighted: void 0 }, item);
      newItem.highlighted = label;
      const labelLowercase = label.toLowerCase();
      const labelLowercaseNoAc = ignoreAccents ? removeAccents(labelLowercase) : labelLowercase;
      if (keywords && keywords.length) {
        const positions = [];
        for (let i = 0; i < keywords.length; i++) {
          let keyword = keywords[i];
          if (ignoreAccents) {
            keyword = removeAccents(keyword);
          }
          const keywordLen = keyword.length;
          let pos1 = 0;
          do {
            pos1 = labelLowercaseNoAc.indexOf(keyword, pos1);
            if (pos1 >= 0) {
              let pos2 = pos1 + keywordLen;
              positions.push([pos1, pos2]);
              pos1 = pos2;
            }
          } while (pos1 !== -1);
        }
        if (positions.length > 0) {
          const keywordPatterns = /* @__PURE__ */ new Set();
          for (let i = 0; i < positions.length; i++) {
            const pair = positions[i];
            const pos1 = pair[0];
            const pos2 = pair[1];
            const keywordPattern = labelLowercase.substring(pos1, pos2);
            keywordPatterns.add(keywordPattern);
          }
          for (let keywordPattern of keywordPatterns) {
            if (keywordPattern === "b") {
              continue;
            }
            const reg = new RegExp("(" + keywordPattern + ")", "ig");
            const newHighlighted = newItem.highlighted.replace(reg, "<b>$1</b>");
            newItem.highlighted = newHighlighted;
          }
        }
      }
      return newItem;
    };
  }
  function isConfirmed(listItem) {
    if (!selectedItem) {
      return false;
    }
    if (multiple) {
      return selectedItem.includes(listItem);
    } else {
      return listItem === selectedItem;
    }
  }
  let draggingOver = false;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.searchFunction === void 0 && $$bindings.searchFunction && searchFunction !== void 0)
    $$bindings.searchFunction(searchFunction);
  if ($$props.labelFieldName === void 0 && $$bindings.labelFieldName && labelFieldName !== void 0)
    $$bindings.labelFieldName(labelFieldName);
  if ($$props.keywordsFieldName === void 0 && $$bindings.keywordsFieldName && keywordsFieldName !== void 0)
    $$bindings.keywordsFieldName(keywordsFieldName);
  if ($$props.valueFieldName === void 0 && $$bindings.valueFieldName && valueFieldName !== void 0)
    $$bindings.valueFieldName(valueFieldName);
  if ($$props.labelFunction === void 0 && $$bindings.labelFunction && labelFunction !== void 0)
    $$bindings.labelFunction(labelFunction);
  if ($$props.keywordsFunction === void 0 && $$bindings.keywordsFunction && keywordsFunction !== void 0)
    $$bindings.keywordsFunction(keywordsFunction);
  if ($$props.valueFunction === void 0 && $$bindings.valueFunction && valueFunction !== void 0)
    $$bindings.valueFunction(valueFunction);
  if ($$props.keywordsCleanFunction === void 0 && $$bindings.keywordsCleanFunction && keywordsCleanFunction !== void 0)
    $$bindings.keywordsCleanFunction(keywordsCleanFunction);
  if ($$props.textCleanFunction === void 0 && $$bindings.textCleanFunction && textCleanFunction !== void 0)
    $$bindings.textCleanFunction(textCleanFunction);
  if ($$props.beforeChange === void 0 && $$bindings.beforeChange && beforeChange !== void 0)
    $$bindings.beforeChange(beforeChange);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.onFocus === void 0 && $$bindings.onFocus && onFocus !== void 0)
    $$bindings.onFocus(onFocus);
  if ($$props.onBlur === void 0 && $$bindings.onBlur && onBlur !== void 0)
    $$bindings.onBlur(onBlur);
  if ($$props.onCreate === void 0 && $$bindings.onCreate && onCreate !== void 0)
    $$bindings.onCreate(onCreate);
  if ($$props.selectFirstIfEmpty === void 0 && $$bindings.selectFirstIfEmpty && selectFirstIfEmpty !== void 0)
    $$bindings.selectFirstIfEmpty(selectFirstIfEmpty);
  if ($$props.minCharactersToSearch === void 0 && $$bindings.minCharactersToSearch && minCharactersToSearch !== void 0)
    $$bindings.minCharactersToSearch(minCharactersToSearch);
  if ($$props.maxItemsToShowInList === void 0 && $$bindings.maxItemsToShowInList && maxItemsToShowInList !== void 0)
    $$bindings.maxItemsToShowInList(maxItemsToShowInList);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.create === void 0 && $$bindings.create && create !== void 0)
    $$bindings.create(create);
  if ($$props.ignoreAccents === void 0 && $$bindings.ignoreAccents && ignoreAccents !== void 0)
    $$bindings.ignoreAccents(ignoreAccents);
  if ($$props.matchAllKeywords === void 0 && $$bindings.matchAllKeywords && matchAllKeywords !== void 0)
    $$bindings.matchAllKeywords(matchAllKeywords);
  if ($$props.sortByMatchedKeywords === void 0 && $$bindings.sortByMatchedKeywords && sortByMatchedKeywords !== void 0)
    $$bindings.sortByMatchedKeywords(sortByMatchedKeywords);
  if ($$props.itemFilterFunction === void 0 && $$bindings.itemFilterFunction && itemFilterFunction !== void 0)
    $$bindings.itemFilterFunction(itemFilterFunction);
  if ($$props.itemSortFunction === void 0 && $$bindings.itemSortFunction && itemSortFunction !== void 0)
    $$bindings.itemSortFunction(itemSortFunction);
  if ($$props.lock === void 0 && $$bindings.lock && lock !== void 0)
    $$bindings.lock(lock);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.localFiltering === void 0 && $$bindings.localFiltering && localFiltering !== void 0)
    $$bindings.localFiltering(localFiltering);
  if ($$props.localSorting === void 0 && $$bindings.localSorting && localSorting !== void 0)
    $$bindings.localSorting(localSorting);
  if ($$props.cleanUserText === void 0 && $$bindings.cleanUserText && cleanUserText !== void 0)
    $$bindings.cleanUserText(cleanUserText);
  if ($$props.lowercaseKeywords === void 0 && $$bindings.lowercaseKeywords && lowercaseKeywords !== void 0)
    $$bindings.lowercaseKeywords(lowercaseKeywords);
  if ($$props.closeOnBlur === void 0 && $$bindings.closeOnBlur && closeOnBlur !== void 0)
    $$bindings.closeOnBlur(closeOnBlur);
  if ($$props.orderableSelection === void 0 && $$bindings.orderableSelection && orderableSelection !== void 0)
    $$bindings.orderableSelection(orderableSelection);
  if ($$props.hideArrow === void 0 && $$bindings.hideArrow && hideArrow !== void 0)
    $$bindings.hideArrow(hideArrow);
  if ($$props.showClear === void 0 && $$bindings.showClear && showClear !== void 0)
    $$bindings.showClear(showClear);
  if ($$props.clearText === void 0 && $$bindings.clearText && clearText !== void 0)
    $$bindings.clearText(clearText);
  if ($$props.showLoadingIndicator === void 0 && $$bindings.showLoadingIndicator && showLoadingIndicator !== void 0)
    $$bindings.showLoadingIndicator(showLoadingIndicator);
  if ($$props.noResultsText === void 0 && $$bindings.noResultsText && noResultsText !== void 0)
    $$bindings.noResultsText(noResultsText);
  if ($$props.loadingText === void 0 && $$bindings.loadingText && loadingText !== void 0)
    $$bindings.loadingText(loadingText);
  if ($$props.moreItemsText === void 0 && $$bindings.moreItemsText && moreItemsText !== void 0)
    $$bindings.moreItemsText(moreItemsText);
  if ($$props.createText === void 0 && $$bindings.createText && createText !== void 0)
    $$bindings.createText(createText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.inputClassName === void 0 && $$bindings.inputClassName && inputClassName !== void 0)
    $$bindings.inputClassName(inputClassName);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selectName === void 0 && $$bindings.selectName && selectName !== void 0)
    $$bindings.selectName(selectName);
  if ($$props.selectId === void 0 && $$bindings.selectId && selectId !== void 0)
    $$bindings.selectId(selectId);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.html5autocomplete === void 0 && $$bindings.html5autocomplete && html5autocomplete !== void 0)
    $$bindings.html5autocomplete(html5autocomplete);
  if ($$props.autocompleteOffValue === void 0 && $$bindings.autocompleteOffValue && autocompleteOffValue !== void 0)
    $$bindings.autocompleteOffValue(autocompleteOffValue);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.dropdownClassName === void 0 && $$bindings.dropdownClassName && dropdownClassName !== void 0)
    $$bindings.dropdownClassName(dropdownClassName);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.noInputStyles === void 0 && $$bindings.noInputStyles && noInputStyles !== void 0)
    $$bindings.noInputStyles(noInputStyles);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.selectedItem === void 0 && $$bindings.selectedItem && selectedItem !== void 0)
    $$bindings.selectedItem(selectedItem);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.highlightedItem === void 0 && $$bindings.highlightedItem && highlightedItem !== void 0)
    $$bindings.highlightedItem(highlightedItem);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.highlightFilter === void 0 && $$bindings.highlightFilter && highlightFilter !== void 0)
    $$bindings.highlightFilter(highlightFilter);
  $$result.css.add(css$1);
  {
    searchFunction || prepareListItems();
  }
  {
    onSelectedItemChanged();
  }
  highlightedItem = filteredListItems && highlightIndex && highlightIndex >= 0 && highlightIndex < filteredListItems.length ? filteredListItems[highlightIndex].item : null;
  showList = opened;
  hasSelection = multiple && selectedItem && selectedItem.length > 0 || !multiple && selectedItem;
  clearable = showClear || (lock || multiple) && hasSelection;
  return `<div class="${[
    escape(className ? className : "", true) + " autocomplete select is-fullwidth " + escape(uniqueId, true) + " svelte-75ckfb",
    (hideArrow || !items.length ? "hide-arrow" : "") + " " + (multiple ? "is-multiple" : "") + " " + (clearable ? "show-clear" : "") + " " + (showLoadingIndicator && loading ? "is-loading" : "")
  ].join(" ").trim()}"><select${add_attribute("name", selectName, 0)}${add_attribute("id", selectId, 0)} ${multiple ? "multiple" : ""} class="${"svelte-75ckfb"}">${!multiple && hasSelection ? `<option${add_attribute("value", valueFunction(selectedItem, true), 0)} selected class="${"svelte-75ckfb"}">${escape(safeLabelFunction(selectedItem))}</option>` : `${multiple && hasSelection ? `${each(selectedItem, (i) => {
    return `<option${add_attribute("value", valueFunction(i, true), 0)} selected class="${"svelte-75ckfb"}">${escape(safeLabelFunction(i))}
        </option>`;
  })}` : ``}`}</select>
  <div class="${"input-container svelte-75ckfb"}"${add_attribute("this", inputContainer, 0)}>${multiple && hasSelection ? `${each(selectedItem, (tagItem, i) => {
    return `<div${add_attribute("draggable", true, 0)} class="${["svelte-75ckfb", draggingOver === i ? "is-active" : ""].join(" ").trim()}">${slots.tag ? slots.tag({
      label: safeLabelFunction(tagItem),
      item: tagItem,
      unselectItem
    }) : `
            <div class="${"tags has-addons svelte-75ckfb"}"><span class="${"tag svelte-75ckfb"}">${escape(safeLabelFunction(tagItem))}</span>
              <span class="${"tag is-delete svelte-75ckfb"}"></span></div>
          `}
        </div>`;
  })}` : ``}
    <input${spread(
    [
      { type: "text" },
      {
        class: escape(inputClassName ? inputClassName : "", true) + " " + escape(noInputStyles ? "" : "input autocomplete-input", true)
      },
      {
        id: escape_attribute_value(inputId ? inputId : "")
      },
      {
        autocomplete: escape_attribute_value(html5autocomplete ? "on" : autocompleteOffValue)
      },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { name: escape_attribute_value(name) },
      { disabled: disabled || null },
      { required: required || null },
      { title: escape_attribute_value(title) },
      {
        readonly: readonly || lock && selectedItem || null
      },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-75ckfb" }
  )}${add_attribute("this", input, 0)}${add_attribute("value", text, 0)}>
    ${clearable ? `<span class="${"autocomplete-clear-button svelte-75ckfb"}"><!-- HTML_TAG_START -->${clearText}<!-- HTML_TAG_END --></span>` : ``}</div>
  <div class="${escape(dropdownClassName ? dropdownClassName : "", true) + " autocomplete-list " + escape(showList ? "" : "hidden", true) + " is-fullwidth svelte-75ckfb"}"${add_attribute("this", list, 0)}>${filteredListItems && filteredListItems.length > 0 ? `${slots["dropdown-header"] ? slots["dropdown-header"]({
    nbItems: filteredListItems.length,
    maxItemsToShowInList
  }) : ``}

      ${each(filteredListItems, (listItem, i) => {
    return `${listItem && (maxItemsToShowInList <= 0 || i < maxItemsToShowInList) ? `<div class="${[
      "autocomplete-list-item svelte-75ckfb",
      (i === highlightIndex ? "selected" : "") + " " + (isConfirmed(listItem.item) ? "confirmed" : "")
    ].join(" ").trim()}">${slots.item ? slots.item({
      item: listItem.item,
      label: listItem.highlighted ? listItem.highlighted : listItem.label
    }) : `
              ${listItem.highlighted ? `<!-- HTML_TAG_START -->${listItem.highlighted}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${listItem.label}<!-- HTML_TAG_END -->`}
            `}
          </div>` : ``}`;
  })}

      ${slots["dropdown-footer"] ? slots["dropdown-footer"]({
    nbItems: filteredListItems.length,
    maxItemsToShowInList
  }) : `
        ${maxItemsToShowInList > 0 && filteredListItems.length > maxItemsToShowInList ? `${moreItemsText ? `<div class="${"autocomplete-list-item-no-results svelte-75ckfb"}">...${escape(filteredListItems.length - maxItemsToShowInList)}
              ${escape(moreItemsText)}</div>` : ``}` : ``}
      `}` : `${`${create ? `<div class="${"autocomplete-list-item-create svelte-75ckfb"}">${slots.create ? slots.create({ createText }) : `${escape(createText)}`}</div>` : `${noResultsText ? `<div class="${"autocomplete-list-item-no-results svelte-75ckfb"}">${slots["no-results"] ? slots["no-results"]({ noResultsText }) : `${escape(noResultsText)}`}</div>` : ``}`}`}`}</div></div>

`;
});
const AddEngagement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { engagementTypes } = $$props;
  const getSecurities = async (keyword) => {
    const url = `/api/security?keyword=${keyword}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };
  if ($$props.engagementTypes === void 0 && $$bindings.engagementTypes && engagementTypes !== void 0)
    $$bindings.engagementTypes(engagementTypes);
  return `<form action="${"?/create"}" method="${"post"}"><div class="${"card border-primary"}"><div class="${"card-header text-center bg-primary bg-gradient fs-4"}">New Engagement</div>
		<div class="${"card-body"}"><div class="${"row"}"><div class="${"col text-center"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
    $$result,
    {
      searchFunction: getSecurities,
      delay: 200,
      localFiltering: false,
      labelFieldName: "ticker",
      showClear: true,
      hideArrow: true,
      showLoadingIndicator: true,
      placeholder: "Security",
      required: true,
      name: "security"
    },
    {},
    {}
  )}</div></div>
			<div class="${"row"}"><div class="${"col mt-2 text-center"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
    $$result,
    {
      items: engagementTypes,
      labelFieldName: "description",
      showClear: true,
      hideArrow: true,
      placeholder: "Engagement",
      name: "engagementType",
      required: true
    },
    {},
    {}
  )}</div></div></div>
		<div class="${"card-footer text-center"}"><button class="${"btn btn-danger col-5"}" data-bs-target="${"#addEngagement"}" data-bs-toggle="${"offcanvas"}" type="${"reset"}">Cancel</button>
			<button class="${"btn btn-primary col-5"}" data-bs-target="${"#addEngagement"}" data-bs-toggle="${"offcanvas"}">Add</button></div></div></form>`;
});
const EngagementTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { engagementData } = $$props;
  if ($$props.engagementData === void 0 && $$bindings.engagementData && engagementData !== void 0)
    $$bindings.engagementData(engagementData);
  return `<table class="${"table table-striped table-hover"}"><thead><tr><th scope="${"col"}">#</th>
			<th scope="${"col"}">Ticker</th>
			<th scope="${"col"}">Company</th>
			<th scope="${"col"}">Engagement</th>
			<th scope="${"col"}">Date Started</th></tr></thead>
	<tbody>${each(engagementData, ({ Security, Engagement_Type, created_at, id }, i) => {
    return `<tr><td>${escape(i + 1)}</td>
				<td><a href="${"/engagement/" + escape(id, true)}">${escape(Security?.ticker)}
					</a></td>
				<td>${escape(Security?.companyName)}</td>
				<td>${escape(Engagement_Type?.description)}</td>
				<td>${escape(created_at.split("T")[0])}</td>
			</tr>`;
  })}</tbody></table>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hidden-button.svelte-n96312{border:0px;background-color:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"row"}"><div class="${"col-11 text-center"}"><h1>Engagements</h1></div>
	
	<div class="${"col align-self-center"}"><button class="${"hidden-button text-success svelte-n96312"}" data-bs-target="${"#addEngagement"}" data-bs-toggle="${"offcanvas"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"32"}" height="${"32"}" fill="${"currentColor"}" class="${"bi bi-plus-circle"}" viewBox="${"0 0 16 16"}"><path d="${"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}"></path><path d="${"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}"></path></svg></button></div>
	<hr></div>
<div class="${"row "}"><div class="${"col"}">${validate_component(EngagementTable, "EngagementTable").$$render($$result, { engagementData: data.engagementData }, {}, {})}</div></div>


<div class="${"offcanvas offcanvas-end"}" tabindex="${"-1"}" id="${"addEngagement"}"><div class="${"offcanvas-body mt-3"}">${validate_component(AddEngagement, "AddEngagement").$$render($$result, { engagementTypes: data.engagementTypeData }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
