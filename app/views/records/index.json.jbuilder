json.array! @records do |record|
	json.number record.id
	json.hello 99
end

json.world 98