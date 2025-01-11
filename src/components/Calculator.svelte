<script lang="ts">
  import { convertAEDtoCAD, convertCADtoAED } from "../utils/conversion";

  let mode: 'AED/CAD' | 'CAD/AED' = $state('AED/CAD');
  let convertedAmount: number = $state(0);

  const switchConversionMode = () => {
    mode = mode === 'AED/CAD' ? 'CAD/AED' : 'AED/CAD';
  }

  const convert = (e: Event) => {
    const amount = (e.target as HTMLInputElement).value;
    
    convertedAmount = mode === 'AED/CAD' ? convertAEDtoCAD(+amount) : convertCADtoAED(+amount);
  }

  const modeSpecifics = {
    'AED/CAD': {
      fromSymbol: "د.إ",
      fromCurrency: "AED",
      conversionStatement: `1 AED =~ ${convertAEDtoCAD(1).toFixed(2)} CAD`,
      toCurrency: "CAD"
    },
    'CAD/AED': {
      fromSymbol: "$",
      fromCurrency: "CAD",
      conversionStatement: `1 CAD =~ ${convertCADtoAED(1).toFixed(2)} AED`,
      toCurrency: "AED"
    }
  }
</script>

{#key mode}
  <div class="px-4 py-5 sm:p-6">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold text-gray-900">Convert {mode}</h3>

      <button type="button" aria-label="switch-conversion" onclick={switchConversionMode} class="hover:-translate-x-1 transition-transform rounded-full p-1 hover:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      </button>
    </div>
    
    <div class="mt-2 max-w-xl text-sm text-gray-500">
      <p>{modeSpecifics[mode].conversionStatement}</p>
    </div>
    
    <div class="mt-5 sm:flex sm:items-center">
      <div class="w-full sm:max-w-xs">
        <div>
          <label for="amount" class="block text-sm/6 font-medium text-gray-900">Amount</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white px-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="shrink-0 select-none text-sm text-gray-500 sm:text-sm/6">{modeSpecifics[mode].fromSymbol}</div>
              <input type="text" name="amount" id="amount" oninput={convert} class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6" placeholder="0.00" aria-describedby="amount-currency">
              <div id="amount-currency" class="shrink-0 select-none text-sm text-gray-500 sm:text-sm/6">{modeSpecifics[mode].fromCurrency}</div>
            </div>
          </div>
        </div>

        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-3xl font-semibold tracking-tight text-gray-900">{convertedAmount.toFixed(2)}</span>
          <span class="text-base text-gray-500">{modeSpecifics[mode].toCurrency}</span>
        </p>
      </div>
    </div>
  </div>
{/key}