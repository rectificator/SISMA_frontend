<template>
    <div class="flex justify-center">
        <div>
            <div class="form-check">
                <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="default"
                    id="flexCheckDefault"
                />
                <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexCheckDefault"
                >
                    Default checkbox
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="checked"
                    id="flexCheckChecked"
                    checked
                />
                <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexCheckChecked"
                >
                    Checked checkbox
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PxCheckboxGroup'
}
</script>