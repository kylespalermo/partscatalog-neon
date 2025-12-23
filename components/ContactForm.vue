<script setup>
import { ref } from "vue";
const config = useRuntimeConfig();

const baseUrl = config.public.web3FormsBaseUrl;
const web3FormsPublicApiKey = config.public.web3FormsPublicApiKey;

const formRef = ref(null);
const result = ref("");
const showResult = ref(false);
const isSubmitting = ref(false);

const submitForm = async () => {
  if (!formRef.value) return;

  const formData = Object.fromEntries(new FormData(formRef.value));
  if (!formData.email) {
    return;
  }

  isSubmitting.value = true;
  showResult.value = true;
  result.value = "Please wait...";

  const payload = JSON.stringify(formData);
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: payload,
    });

    const json = await response.json();
    result.value = "Thanks for connecting, we will get back to you right away.";
  } catch (error) {
    console.error(error);
    result.value = "Something went wrong!";
  } finally {
    isSubmitting.value = false;
    formRef.value.reset();
  }
};
</script>
<template>
  <section class="max-w-7xl mx-auto px-8 pb-24" ref="sectionRefEl">
    <form ref="formRef" @submit.prevent="submitForm">
      <input type="hidden" name="access_key" :value="web3FormsPublicApiKey" />
      <h3 class="text-xl font-semibold mb-2">We take requests</h3>
      <p class="text-md text-gray-700 mb-6">
        If it's not in our database, we'll find it!
      </p>
      <div class="flex flex-col sm:flex-row gap-4 max-w-md">
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          class="flex-1 rounded-full border px-4 py-2 text-md bg-gray-100"
        />
        <button
          class="text-white px-6 py-2 rounded-full"
          style="background-color: #222222"
          type="submit"
        >
          Submit
        </button>
      </div>
      <label
        class="flex items-center gap-2 text-xs text-gray-500 mt-3"
        style="cursor: pointer"
      >
        <input
          name="agree_to_receive_marketing_emails?"
          type="checkbox"
          class="checkmark accent-[#222222]"
        />
        I agree to receive marketing emails
      </label>
    </form>
    <div
      v-if="showResult"
      class="px-3 py-1 mt-3 rounded-md bg-gray-100 border-gray-300 inline-block"
      id="result"
    >
      {{ result }}
    </div>
  </section>
</template>
