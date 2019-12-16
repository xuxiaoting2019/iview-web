
<template>
	<div class="login d-flex">
		<div class="login-form">
			 <Form ref="formValidates" :model="formValidate" :rules="ruleValidate" :label-width="80">
					<FormItem label="Input">
							<Input v-model="formValidate.input" placeholder="Enter something..."></Input>
					</FormItem>
					<FormItem label="Select">
							<Select v-model="formValidate.select">
									<Option value="beijing">New York</Option>
									<Option value="shanghai">London</Option>
									<Option value="shenzhen">Sydney</Option>
							</Select>
					</FormItem>
					<FormItem>
            <Button type="primary" @click="handleSubmit('formValidates')">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        	</FormItem>
				</Form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			formValidate: {
				input: '',
				select: ''
			},
			ruleValidate: {
				input: [
						{ required: true, message: 'The name cannot be empty', trigger: 'blur' }
				],
				select: [
						{ required: true, message: 'Please select the city', trigger: 'change' }
				]
			}
		}
	},
	methods: {
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
					if (valid) {
							this.$Message.success('Success!');
					} else {
							this.$Message.error('Fail!');
					}
			})
		}
	}
}
</script>
<style lang="stylus" scoped>
.login-form
	position absolute
	background skyblue
	width 800px
	height 300px
	left 50%
	top 50%
	transform translate(-50%, -50%)
</style>
